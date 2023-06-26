- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/02-home.png)

# HOME

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |

&nbsp;

## BANNER PRINCIPAL

***Informações:***

| Dúvida                          | Instrução                                                               |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                                 |
| **Onde será exibido**           | Home - Banner principal abaixo do header, ocupa 100% da largura da tela |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/banner/editar?id=7)            |

&nbsp;

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                              |
| ------------- | ------------------- | ------------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Desktop: Dimensão sugerida 1920x880 pixels / Mobile: Dimensão sugerida 800x1160 pixels                            |
| **Título**    | :black_circle:      | Alt da imagem                                           |
| **Subtítulo** | :large_blue_circle: | Colocar posição do texto, opções disponíveis abaixo     |
| **Descrição** | :large_blue_circle: | Colocar descrição do banner                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba  |
| **URL**       | :large_blue_circle: | Link de direcionamento                                  |
| **Posição**   | :black_circle:      | `home-banner-principal`, `home-banner-principal-mobile` |
| **Cor**       | :no_entry:          |                                                         |

&nbsp;

**Posições de texto possíveis para colocar no campo subtítulo:**

```md
left-top
left-center
left-bottom

center-top
center-center
center-bottom

right-top
right-center
right-bottom
```

&nbsp;

## BANNERS CATEGORIAS

***Informações:***

| Dúvida                          | Instrução                                                       |
| ------------------------------- | --------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                         |
| **Onde será exibido**           | Banners de categoria na parte de baixo da home                  |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.com.br/admin/midias/editar?id=5) |


***Orientações sobre os campos:***


| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 1000x700 pixels                      |
| **Título**    | :black_circle:      | Alt da imagem                                          |
| **Subtítulo** | :no_entry:          |                                                        |
| **Descrição** | :large_blue_circle: | Texto em Mardown                                       |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-banner-categoria`                                |
| **Cor**       | :large_blue_circle: | Selecionar a cor do texto                              |

## PRODUTOS

***Informações:***

| Dúvida                          | Instrução                                                                |
| ------------------------------- | ------------------------------------------------------------------------ |
| **Onde cadastrar**              | Tags                                                                     |
| **Onde será exibido**           | Na home abaixo do `home-banner-principal`                                |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/tags/editar?id=produtos-home-1) |

***Informações sobre os campos***

| Campo         | Funcional?          | Orientação                                                                      |
| ------------- | ------------------- | ------------------------------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag, que também será o link para a listagem.                    |
| **Título**    | :no_entry:          | Não utilizado.                                                                  |
| **Subtítulo** | :no_entry:          | Não utilizado.                                                                  |
| **Descrição** | :no_entry:          | Não utilizado.                                                                  |
| **Tipo**      | :large_blue_circle: | `home-produtos`. Pode inserir quantas tags quiser para gerar vários carrosséis. |
| **Imagem**    | :no_entry:          | Não utilizado.                                                                  |

## BANNER FRASE

***Informações:***

| Dúvida                          | Instrução            |
| ------------------------------- | -------------------- |
| **Onde cadastrar**              | Banners              |
| **Onde será exibido**           | Seção de depoimentos |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/banner/editar?id=49)            |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 150x150 pixels                       |
| **Título**    | :black_circle:      | Alt da imagem                                          |
| **Subtítulo** | :large_blue_circle: | Texto do botão                                         |
| **Descrição** | :large_blue_circle: | Texto do depoimento. Usar markdown.                    |
| **Externo?**  | :no_entry:          | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :no_entry:          | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-banner-frase`                                    |
| **Cor**       | :no_entry:          |                                                        |

## BANNERS LADO A LADO

***Informações:***

| Dúvida                          | Instrução                                                         |
| ------------------------------- | ----------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                           |
| **Onde será exibido**           | Home - Banners que intercalam o lado.                             |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/banner/editar?id=46)     |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 1000x560 pixels                      |
| **Título**    | :black_circle:      | Alt da imagem                                          |
| **Subtítulo** | :no_entry:          |                                                        |
| **Descrição** | :large_blue_circle: | Texto que fica sobre a imagem em Mardown               |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-banner-grid`                                     |
| **Cor**       | :no_entry:          |                                                        |

## TÍTULO INSTAGRAM

**_Informações:_**

| Dúvida                          | Instrução                                           |
| ------------------------------- | --------------------------------------------------- |
| **Onde cadastrar**              | Banners                                             |
| **Onde será exibido**           | Título da seção do instagem                         |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/banner/editar?id=67) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :no_entry:          |                                                        |
| **Título**    | :black_circle:      | Não exibido no front                                   |
| **Subtítulo** | :large_blue_circle: | @ do instagram                                         |
| **Descrição** | :large_blue_circle: | Breve descrição                                        |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento para o instagram                |
| **Posição**   | :black_circle:      | `home-instagram-título`                                |
| **Cor**       | :no_entry:          |                                                        |

&nbsp;

**_Observações:_**

As imagens utilizadas no ambiente de desenvolvimento e pré produção, são apenas para demarcar a seção.
Para está seção aparecer em produção é necessário realizar a integração com o instagram. Caso deseje está opção, entrar em contato com o atendimento.

***
