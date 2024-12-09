var TotalSemana = 0;
var NaolidoSemana = 0;
var amor = 0;
var alegria = 0;
var sabedoria = 0;
var esperanca = 0;
var forca = 0;
var lista_lidosMes = [];
var lista_NomeMes = [];

// nomeUsuario.innerText = sessionStorage.NOME_USUARIO;
var lista_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

window.onload = function() {
    mostrarHistorico();
    mostrarKpis();
};

function mostrarKpis() {
    var idUsuario = sessionStorage.ID_USUARIO;

    const requests = [
        fetch(`/dashboardkpi/totalLido/${idUsuario}`).then(res => res.json()),
        fetch(`/dashboardkpi/DiasConta/${idUsuario}`).then(res => res.json()),
        fetch(`/dashboardkpi/ultimomes/${idUsuario}`).then(res => res.json()),
        fetch(`/dashboardkpi/consecutivos/${idUsuario}`).then(res => res.json()),
    ];

    Promise.all(requests)
        .then(([totalLidoResp, diasContaResp, totalMesResp, consecutivosResp]) => {
            LidosGeral.innerText = totalLidoResp[0].totalLidos;
            Dias.innerText = diasContaResp[0].DiasConta;
            TotalMes.innerText = totalMesResp[0].totalMes;
            Consecutivos.innerText = consecutivosResp[0].dias_consecutivos;
        })
        .catch(function (erro) {
            console.error("Erro ao carregar KPIs:", erro);
        });
}
function mostrarHistorico() {
    var idUsuario = sessionStorage.ID_USUARIO;

    Promise.all([
        fetch(`/dashboardhistorico/ultimos7dias/${idUsuario}`).then(res => res.json()).then(res => {
            TotalSemana = res[0].totalSemana || 0;
            NaolidoSemana = 7 - TotalSemana;
        }),
        fetch(`/dashboardhistorico/temaDevocional/${idUsuario}`).then(res => res.json()).then(res => {
            amor = Number(res[0]?.amor || 0);
            alegria = Number(res[0]?.alegria || 0);
            sabedoria = Number(res[0]?.sabedoria || 0);
            esperanca = Number(res[0]?.esperanca || 0);
            forca = Number(res[0]?.forca || 0);
        }),
        fetch(`/dashboardhistorico/ultimos3meses/${idUsuario}`).then(res => res.json()).then(res => {
            res.forEach(mes => {
                lista_lidosMes.push(mes.total || 0);
                lista_NomeMes.push(lista_meses[mes.mes - 1]);
            });
        })
    ])
        .then(() => {
            plotarGrafico1();
            plotarGrafico2();
            plotarGrafico3();
        })
        .catch(err => console.error('Erro ao carregar dados:', err));
}

// function mostrarHistorico() {
//     var idUsuario = sessionStorage.ID_USUARIO;

//     fetch(`/dashboardhistorico/ultimos7dias/${idUsuario}`)
//         .then(function (resposta) {
//             if (resposta.ok) {
//                 return resposta.json();
//             } else {
//                 throw new Error('Erro na API - ultimos7dias');
//             }
//         })
//         .then(function (resposta) {
//             TotalSemana = resposta[0].totalSemana;
//             NaolidoSemana = 7 - TotalSemana;
//         })
//         .catch(function (erro) {
//             console.error(erro);
//         });

//     fetch(`/dashboardhistorico/temaDevocional/${idUsuario}`)
//         .then(function (resposta) {
//             if (resposta.ok) {
//                 return resposta.json();
//             } else {
//                 throw new Error('Erro na API - temaDevocional');
//             }
//         })
//         .then(function (resposta) {
//             amor = Number(resposta[0].amor);
//             alegria = Number(resposta[0].alegria);
//             sabedoria = Number(resposta[0].sabedoria);
//             esperanca = Number(resposta[0].esperanca);
//             forca = Number(resposta[0].forca);
//         })
//         .catch(function (erro) {
//             console.error(erro);
//         });

//     fetch(`/dashboardhistorico/ultimos3meses/${idUsuario}`)
//         .then(function (resposta) {
//             if (resposta.ok) {
//                 return resposta.json();
//             } else {
//                 throw new Error('Erro na API - ultimos3meses');
//             }
//         })
//         .then(function (resposta) {
//             resposta.forEach((mes, index) => {
//                 lista_lidosMes.push(mes.total);
//                 lista_NomeMes.push(lista_meses[mes.mes - 1]);
//             });
//         })
//         .catch(function (erro) {
//             console.error(erro);
//         });


//         fetch(`/dashboardhistorico/totalLido/${idUsuario}`).then(function (resposta) {
//             if (resposta.ok) {
//                 if (resposta.status == 204) {
//                     var devocional = document.getElementById("testeDevocional");
//                 } else {
//                     resposta.json().then(function (resposta) {
//                         var RespTotalLido = resposta[0]
//                         totalLido = RespTotalLido.totalLidos
//                         console.log(totalLido)
//                         LidosGeral.innerText = totalLido
//                     });
//                 }
//             } else {
//                 throw ('Houve um erro na API');
//             }
//         }).catch(function (resposta) {
//             console.error(resposta);
//         });
//         fetch(`/dashboardhistorico/DiasConta/${idUsuario}`).then(function (resposta) {
//             if (resposta.ok) {
//                 if (resposta.status == 204) {
//                     var devocional = document.getElementById("testeDevocional");
//                 } else {
//                     resposta.json().then(function (resposta) {
//                         var RespDiasConta = resposta[0]
//                         DiasConta = RespDiasConta.DiasConta
//                         console.log(DiasConta)
//                         Dias.innerText = DiasConta
//                     });
//                 }
//             } else {
//                 throw ('Houve um erro na API');
//             }
//         }).catch(function (resposta) {
//             console.error(resposta);
//         });
//         fetch(`/dashboardhistorico/ultimomes/${idUsuario}`).then(function (resposta) {
//             if (resposta.ok) {
//                 if (resposta.status == 204) {
//                     var devocional = document.getElementById("testeDevocional");
//                 } else {
//                     resposta.json().then(function (resposta) {
//                         var RespTotalMes = resposta[0]
//                         totalMes = RespTotalMes.totalMes
//                         console.log(totalMes)
//                         TotalMes.innerText = totalMes
//                     });
//                 }
//             } else {
//                 throw ('Houve um erro na API');
//             }
//         }).catch(function (resposta) {
//             console.error(resposta);
//         });
//         fetch(`/dashboardhistorico/consecutivos/${idUsuario}`).then(function (resposta) {
//             if (resposta.ok) {
//                 if (resposta.status == 204) {
//                     var devocional = document.getElementById("testeDevocional");
//                 } else {
//                     resposta.json().then(function (resposta) {
//                         var Respconsecutivo = resposta[0]
//                         consecutivo = Respconsecutivo.dias_consecutivos
//                         console.log(consecutivo)
//                         Consecutivos.innerText = consecutivo
//                     });
//                 }
//             } else {
//                 throw ('Houve um erro na API');
//             }
//         }).catch(function (resposta) {
//             console.error(resposta);
//         });

//     plotarGrafico1();
//     plotarGrafico2();
//     plotarGrafico3();
// }

function plotarGrafico1() {
    const dataA = {
        labels: lista_NomeMes,
        datasets: [
            {
                label: 'Devocionais lidos',
                data: lista_lidosMes,
                backgroundColor: ['#2876E8', '#2876E8', '#2876E8']
            }
        ]
    };

    const configA = {
        type: 'bar',
        data: dataA,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Devocionais lidos nos últimos 3 meses',
                    font: { size: 14 }
                },
                legend: {
                    labels: {
                        font: { size: 16 },
                        boxWidth: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Quantidade',
                        font: { size: 12 }
                    }
                }
            }
        }
    };

    new Chart(document.getElementById('meuGrafico'), configA);
}

function plotarGrafico2() {
    const ctx = document.getElementById('graficoRosquinha').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Lidos', 'Não lido'],
            datasets: [
                {
                    label: 'Devocionais',
                    data: [TotalSemana, NaolidoSemana],
                    backgroundColor: ['#27B263', '#E82828'],
                    borderColor: ['#27B263', '#E82828'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Devocionais lidos na última semana (7 dias)',
                    font: { size: 14 }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: { size: 16 },
                        boxWidth: 20
                    }
                },
                tooltip: { enabled: true }
            }
        }
    });
}

function plotarGrafico3() {
    const ctx = document.getElementById('graficoRadar').getContext('2d');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Alegria', 'Força', 'Esperança', 'Sabedoria', 'Amor'],
            datasets: [
                {
                    label: 'Devocionais lidos',
                    data: [alegria, forca, esperanca, sabedoria, amor],
                    backgroundColor: 'rgba(239, 142, 52, 0.2)',
                    borderColor: 'rgb(239, 142, 52)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Tema abordado nos devocionais lidos',
                    font: { size: 14 }
                },
                legend: { position: 'top' }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        display: true,
                        font: { size: 10 }
                    },
                    pointLabels: {
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}
