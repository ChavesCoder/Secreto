
    // Objeto em JavaScript - Objetos são compostos por pares, de chave-valor 
    // No meu caso a chave é o nome do livro EX: Ester. E o valor é a quantidade de capitulos EX: 10
    // Ou seja o objeto LivrosECapituos, armazenas pares onde possui livro e quantidade de capitulos "Ester: 10"
    var LivrosECapitulos = {
        'Gênesis': 50,
        'Êxodo': 40,
        'Levítico': 27,
        'Números': 36,
        'Deuteronômio': 34,
        'Josué': 24,
        'Juízes': 21,
        'Rute': 4,
        '1Samuel': 31,
        '2Samuel': 24,
        '1Reis': 22,
        '2Reis': 25,
        '1Crônicas': 29,
        '2Crônicas': 36,
        'Esdras': 10,
        'Neemias': 13,
        'Ester': 10,
        'Jó': 42,
        'Salmos': 150,
        'Provérbios': 31,
        'Eclesiastes': 12,
        'Cantares': 8,
        'Isaías': 66,
        'Jeremias': 52,
        'Lamentações': 5,
        'Ezequiel': 48,
        'Daniel': 12,
        'Oséias': 14,
        'Joel': 3,
        'Amós': 9,
        'Obadias': 1,
        'Jonas': 4,
        'Miqueias': 7,
        'Naum': 3,
        'Habacuque': 3,
        'Sofonias': 3,
        'Ageu': 2,
        'Zacarias': 14,
        'Malaquias': 4,
        'Mateus': 28,
        'Marcos': 16,
        'Lucas': 24,
        'João': 21,
        'Atos': 28,
        'Romanos': 16,
        '1Coríntios': 16,
        '2Coríntios': 13,
        'Gálatas': 6,
        'Efésios': 6,
        'Filipenses': 4,
        'Colossenses': 4,
        '1Tessalonicenses': 5,
        '2Tessalonicenses': 3,
        '1Timóteo': 6,
        '2Timóteo': 4,
        'Tito': 3,
        'Filemom': 1,
        'Hebreus': 13,
        'Tiago': 5,
        '1Pedro': 5,
        '2Pedro': 3,
        '1João': 5,
        '2João': 1,
        '3João': 1,
        'Judas': 1,
        'Apocalipse': 22
    };
    
    livro.value = 'Gênesis'
    capitulo.value = 1


    // Esse loop for, ele será responsavel por adicionar os Livros da biblia como opção para o meu usuario.

    // Aqui a variavel livro irá, assumir o valor de cada uma das chaves do objeto LivrosECapitulos.
    for (var livroChave in LivrosECapitulos) {
        var option = document.createElement('option'); //Para cada valor de chave ele cria um elemento option
        option.textContent = livroChave; // o texto do elemento option recebe o nome do livro e o valor pois nao tem o elemento value
        livro.appendChild(option); // Por fim o appendChild() Adiciona o nosso option que está como paremetro no final do elemento com id livro que é nosso select
    }

    // Atualiza os capítulos com base no livro selecionado
    function EscolherCapitulo() {
        var livroSelecionado = livro.value; // Pegando o valor da select, selecionado com base na opcão selecionada
        var capitulos = LivrosECapitulos[livroSelecionado]; // O valor da select armazena a chave que é o livro que preciso e com o Objeto[Chave] o resultado é o valor que no caso é os capituloa

        // capitulo.innerHTML = '<option value="" disabled selected>Selecione um capítulo</option>'; //limpo meus capituos sempre que chamo a função, pois se eu já ter selecionado um livro antes e passado no for abaixo, sem limprar ele acumula a quantidade de opções 

        // Esse for é bem parecido com o for de livros, vai de 1 até a quantidade de capitulos que tenho no livro, crindo tag option, que recebe o valor do capitulo que é a tag i que está sendo incrementada a cada capitulo e receve o conteudo, por ultimo é adicionada na select com o id capitulo
        for (var i = 1; i <= capitulos; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.textContent = `Capítulo ${i}`;
            capitulo.appendChild(option);
        }

        capitulo.disabled = false; // antes de escolher o livro é desabilitado para escolher o capitulo, nessa linha eu habilito
    };

    // Função asincrona que é uma função que opera sem bloquear a execução de outras partes do programa. E me permite usar o await que aguarda o resultado da função asincrona, tembem me permite utilizar o try e catch para lidar com excessoes de erros
    async function Buscar() {
        // event.preventDefault();

        // Pegando os valores dos selects
        var livroSelecionado = livro.value;
        var capituloSelecionado = capitulo.value;

        // --------------- Essa parte é feita para corrigir um bug da api que encontrei-----------------------------

        var traducao = '?translation=almeida'

        if (livroSelecionado == '1Reis') {
            traducao = ''
            livroSelecionado = '1Kings'
        } else if (livroSelecionado == '2Reis') {
            traducao = ''
            livroSelecionado = '2Kings'
        } else if (livroSelecionado == '1Crônicas') {
            traducao = ''
            livroSelecionado = '1Chronicles'
        } else if (livroSelecionado == '2Crônicas') {
            traducao = ''
            livroSelecionado = '2Chronicles'
        } else if (livroSelecionado == '1Tessalonicenses') {
            traducao = ''
            livroSelecionado = '1Thessalonians'
        } else if (livroSelecionado == '2Tessalonicenses') {
            traducao = ''
            livroSelecionado = '2Thessalonians'
        } else if (livroSelecionado == '1Timóteo') {
            traducao = ''
        } else if (livroSelecionado == '2Timóteo') {
            traducao = ''
        } else if (livroSelecionado == '1Samuel') {
            traducao = ''
        } else if (livroSelecionado == '2Samuel') {
            traducao = ''
        } else if (livroSelecionado == '1Pedro') {
            traducao = ''
            livroSelecionado == '1Peter'
        } else if (livroSelecionado == '2Pedro') {
            traducao = ''
            livroSelecionado == '2Peter'
        } else if (livroSelecionado == 'Obadiah') {
            traducao = ''
        } else if (livroSelecionado == '1Coríntios') {
            traducao = ''
            livroSelecionado = '1Corinthians'
        } else if (livroSelecionado == '2Coríntios') {
            traducao = ''
            livroSelecionado = '2Corinthians'
        } else if (livroSelecionado == '1João') {
            livroSelecionado = '1John'
            traducao = ''
        } else if (livroSelecionado == '2João') {
            traducao = ''
            livroSelecionado = '2John'
        } else if (livroSelecionado == '3João') {
            traducao = ''
            livroSelecionado = '3John'
        } else if (livroSelecionado == 'Jó') {
            livroSelecionado = 'Job'
        } else if (livroSelecionado == 'Cantares') {
            traducao = ''
            livroSelecionado = 'Songs'
        } else if (livroSelecionado == 'Judas') {
            livroSelecionado = 'Jude'
        } else if (livroSelecionado == 'Filemon') {
            livroSelecionado = 'Philemom'
        }

// -----------------------------------------------------------------------------------------------------------------


        // Uma validação apenas para previnir que de algum erro de buscar sem selecionar livro
        // Porem com a função oncharge não estou precisando utilizar
        if (!livroSelecionado || !capituloSelecionado) {
            alert('Por favor, selecione um livro, capítulo.');
            return;
        }

        // Exibe um carregamento básico enquanto busca os dados
        // versiculosBiblia.innerHTML = "<p>Carregando...</p>";
        // versiculoReferencia.textContent = "";


        // Try que tenta fazer o codigo que está nele e e apanha o erro que tiver, enviando para o catch, não paralisando minha aplicação mas mostrando o erro e me ajuda a entender ele no codigo
        try {
            // Fetch faz a requisição na API, junto da variveis que criei acima, que filtra o livro, capitulo e traducao
            var response = await fetch(`https://bible-api.com/${livroSelecionado}:${capituloSelecionado}${traducao}`);

            // Se a resposta for um erro, esse if, irá ajudar a entender que é aqui o erro 
            if (!response.ok) {
                throw new Error("Erro ao buscar o capítulo.");
            }

            // Variavel data, recebe o json que é a resposta da requisição da API, vem como objeto que posso utilizar
            var data = await response.json();

            // Exibe os versículos formatados
            versiculosBiblia.innerHTML = ""; // Limpa o container de versículos para não ficar acumulando 

            // Para cada item do array que vem da API data.versiculosBiblia (resposta.versiculo) passo como parametro o versiculo e crio uma span que recebe uma class (para ser modificada no css) e recebe o numero do versiculo juntamente com o conteudo do versiculo.
            data.verses.forEach((verse) => {
                var versiculoSpan = document.createElement('span');
                versiculoSpan.className = 'versiculoBiblia';
                versiculoSpan.innerHTML = `
             <span class="versiculoBiblia-number">${verse.verse}</span>
             <span class="versiculoBiblia-text">${verse.text}</span>
           `;
                versiculosBiblia.appendChild(versiculoSpan); // Jogando a variavel que foi criada agora dentro da tag com id versiculos
            });

            versiculoReferencia.innerText = `${data.reference}`; //Colocando o a referencia do versiculo na div com id VersiculoReferencia
        } catch (error) {
            versiculosBiblia.innerHTML = `<p>Erro: ${error.message}</p>`;
            //mostrando o erro visivelmente para o usuario 
        }
    };

    // Função para passar os capitulos
    function passarCapitulo(direcao) {
        var livroSelecionado = livro.value;
        var capituloSelecionado = capitulo.value;
        var capitulos = LivrosECapitulos[livroSelecionado];

        // Se o parametro direção for -1, diminui o capítulo
        // Se o parametro direção for 1, aumenta o capítulo
        var novoCapitulo = Number(capituloSelecionado) + direcao;

        // IF para certificar que nao vai buscar um capitulo que nao existe
        if (novoCapitulo >= 1 && novoCapitulo <= capitulos) {
            capitulo.value = novoCapitulo;
            Buscar(); // Chama a função para atualizar os versículos
        }
        window.scrollTo(0, 0);
    };

    async function iniciar(){
        var livroSelecionado = livro.value;

        var capitulos = LivrosECapitulos[livroSelecionado]; // O valor da select armazena a chave que é o livro que preciso e com o Objeto[Chave] o resultado é o valor que no caso é os capituloa

        // capitulo.innerHTML = '<option value=""></option>'; //limpo meus capituos sempre que chamo a função, pois se eu já ter selecionado um livro antes e passado no for abaixo, sem limprar ele acumula a quantidade de opções 

        // Esse for é bem parecido com o for de livros, vai de 1 até a quantidade de capitulos que tenho no livro, crindo tag option, que recebe o valor do capitulo que é a tag i que está sendo incrementada a cada capitulo e receve o conteudo, por ultimo é adicionada na select com o id capitulo
        for (var i = 1; i <= capitulos; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.textContent = `Capítulo ${i}`;
            capitulo.appendChild(option);
        }

        capitulo.disabled = false; // antes de escolher o livro é desabilitado para escolher o capitulo, nessa linha eu habilito
        capitulo.value = 1
        var capituloSelecionado = capitulo.value;
        var traducao = '?translation=almeida'

        try {
            // Fetch faz a requisição na API, junto da variveis que criei acima, que filtra o livro, capitulo e traducao
            var response = await fetch(`https://bible-api.com/${livroSelecionado}:${capituloSelecionado}${traducao}`);

            // Se a resposta for um erro, esse if, irá ajudar a entender que é aqui o erro 
            if (!response.ok) {
                throw new Error("Erro ao buscar o capítulo.");
            }

            // Variavel data, recebe o json que é a resposta da requisição da API, vem como objeto que posso utilizar
            var data = await response.json();

            // Exibe os versículos formatados
            versiculosBiblia.innerHTML = ""; // Limpa o container de versículos para não ficar acumulando 

            // Para cada item do array que vem da API data.versiculosBiblia (resposta.versiculo) passo como parametro o versiculo e crio uma span que recebe uma class (para ser modificada no css) e recebe o numero do versiculo juntamente com o conteudo do versiculo.
            data.verses.forEach((verse) => {
                var versiculoSpan = document.createElement('span');
                versiculoSpan.className = 'versiculoBiblia';
                versiculoSpan.innerHTML = `
             <span class="versiculoBiblia-number">${verse.verse}</span>
             <span class="versiculoBiblia-text">${verse.text}</span>
           `;
                versiculosBiblia.appendChild(versiculoSpan); // Jogando a variavel que foi criada agora dentro da tag com id versiculos
            });

            versiculoReferencia.innerText = `${data.reference}`; //Colocando o a referencia do versiculo na div com id VersiculoReferencia
        } catch (error) {
            versiculosBiblia.innerHTML = `<p>Erro: ${error.message}</p>`;
            //mostrando o erro visivelmente para o usuario 
        }
    };