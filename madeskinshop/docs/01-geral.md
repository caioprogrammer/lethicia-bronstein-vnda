


- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/01-geral.png)

# GERAL

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |

&nbsp;

## POPUP DE NEWSLETTER

**_Observações:_**

Criar formulário no [Admin](https://template2.vnda.dev/admin/config/mensagens-e-avisos/forms) com o assunto `newsletter`. Serve para o popup e a newsletter do rodapé.

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                              |
| --------------------- | ------------------------------------------------------ |
| **Onde cadastrar**    | Banners                                                |
| **Onde será exibido** | Popup com newsletter que aparece uma vez a cada 7 dias |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/banner/editar?id=37)    |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                                 |
| ------------- | ------------------- | ---------------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 550x680 pixels                           |
| **Título**    | :black_circle:      | Controle interno                                           |
| **Subtítulo** | :no_entry:          |                                                            |
| **Descrição** | :large_blue_circle: | Texto da popup                                             |
| **Externo?**  | :no_entry:          |                                                            |
| **URL**       | :no_entry:          |                                                            |
| **Posição**   | :black_circle:      | `newsletter-popup`                                         |
| **Cor**       | :large_blue_circle: | Opcional, se selecionado irá mudar a cor de fundo da popup |

**Obs**: Caso deseje trocar o texto após o envio do formulário, separar os dois textos com `---` o campo descrição. O segundo texto (abaixo da divisão) será exibido somente se o formulário de newsletter for enviado corretamente.

&nbsp;

### HEADER

## BANNER FAIXA TOPO

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Banner faixa a cima do header                                 |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/banner/editar?id=42) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação            |
| ------------- | ------------------- | --------------------- |
| **Imagem**    | :no_entry:          |                       |
| **Título**    | :black_circle:      | Controle interno      |
| **Subtítulo** | :large_blue_circle: | Cor do texto em hex   |
| **Descrição** | :large_blue_circle: | Texto do banner faixa |
| **Externo?**  | :no_entry:          |                       |
| **URL**       | :no_entry:          |                       |
| **Posição**   | :black_circle:      | `geral-faixa-topo`    |
| **Cor**       | :large_blue_circle: | Cor do fundo          |

&nbsp;

## MENU PRINCIPAL

**_Informações:_**

| Dúvida                | Instrução                                           |
| --------------------- | --------------------------------------------------- |
| **Onde cadastrar**    | Menu                                                |
| **Onde será exibido** | Menus principal do site                             |
| **Níveis**            | 3 níveis                                            |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/paginas) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                                     |
| ------------- | ------------------- | -------------------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                                 |
| **Tooltip**   | :black_circle:      | Cor do texto do menu                                           |
| **Descrição** | :no_entry:          |                                                                |
| **Posição**   | :black_circle:      | `principal`                                                    |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba           |
| **URL**       | :black_circle:      | Link de direcionamento, se for `#` o menu não vai ser clicável |

&nbsp;

### RODAPÉ

## LINKS

***Informações:***

| Dúvida                          | Instrução                                           |
| :------------------------------ | :-------------------------------------------------- |
| **Onde cadastrar**              | Menu                                                |
| **Onde será exibido**           | Links do rodapé, abaixo das redes sociais           |
| **Quantos Níveis**              | 1 nível                                             |
| **Cadastro exemplo em staging** | [Admin](https://template2.vnda.dev/admin/navegacao) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                       |
| **Tooltip**   | :no_entry:          |                                                      |
| **Descrição** | :no_entry:          |                                                      |
| **Posição**   | :black_circle:      | `rodape`                                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento                               |

## NEWSLETTER

***Informações:***

| Dúvida                          | Instrução                                                     |
| :------------------------------ | :------------------------------------------------------------ |
| **Onde cadastrar**              | Banners                                                       |
| **Onde será exibido**           | Seção de newsletter do rodapé                                 |
| **Cadastro exemplo em staging** | [Admin](https://template2.vnda.dev/admin/midias/editar?id=20) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                    |
| ------------- | ------------------- | ----------------------------- |
| **Imagem**    | :no_entry:          |                               |
| **Título**    | :black_circle:      | Controle interno              |
| **Subtítulo** | :large_blue_circle: | Título da seção de newsletter |
| **Descrição** | :no_entry:          |                               |
| **Externo?**  | :no_entry:          |                               |
| **URL**       | :no_entry:          |                               |
| **Posição**   | :black_circle:      | `geral-newsletter`            |
| **Cor**       | :no_entry:          |                               |

## REDES SOCIAIS

***Informações:***

| Dúvida                          | Instrução                                           |
| :------------------------------ | :-------------------------------------------------- |
| **Onde cadastrar**              | Menu                                                |
| **Onde será exibido**           | Links de redes sociais                              |
| **Quantos Níveis**              | 1 nível                                             |
| **Cadastro exemplo em staging** | [Admin](https://template2.vnda.dev/admin/navegacao) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                                                                                                 |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Título**    | :black_circle:      | Define o título do link                                                                                                    |
| **Tooltip**   | :large_blue_circle: | Tooltip define o ícone que aparece: `instagram, pinterest, facebook, messenger, whatsapp, twitter, youtube, vimeo, flickr` |
| **Descrição** | :no_entry:          |                                                                                                                            |
| **Posição**   | :black_circle:      | `redes-sociais`                                                                                                            |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba                                                                       |
| **URL**       | :black_circle:      | Link de direcionamento                                                                                                     |

## FRASE RODAPE

***Informações:***

| Dúvida                          | Instrução                                                     |
| :------------------------------ | :------------------------------------------------------------ |
| **Onde cadastrar**              | Banners                                                       |
| **Onde será exibido**           | Aparece abaixo da seção de newsletter                         |
| **Cadastro exemplo em staging** | [Admin](https://template2.vnda.dev/admin/midias/editar?id=10) |

***Orientações sobre os campos:***

| Campo         | Funcional?     | Orientação                              |
| ------------- | -------------- | --------------------------------------- |
| **Imagem**    | :no_entry:     |                                         |
| **Título**    | :black_circle: | Campo de título define o texto do bloco |
| **Subtítulo** | :no_entry:     |                                         |
| **Descrição** | :no_entry:     |                                         |
| **Externo?**  | :no_entry:     |                                         |
| **URL**       | :no_entry:     |                                         |
| **Posição**   | :black_circle: | `geral-texto-rodape`                    |
| **Cor**       | :no_entry:     |                                         |

***
