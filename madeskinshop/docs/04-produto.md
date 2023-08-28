- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/04-produto.png)

# PRODUTO

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |

&nbsp;

**_Informações:_**

| Dúvida                       | Instrução                                                          |
| ---------------------------- | ------------------------------------------------------------------ |
| **Onde cadastrar**           | Produtos                                                           |
| **Onde será exibido**        | Página do produto                                                  |
| **Cadastro exemplo**         | [Admin](https://template2.vnda.dev/admin/produtos/editar?id=1636)   |
| **Página para visualização** | [Página](https://template2.vnda.dev/produto/body-manga-longa-suedine-ref-20488-1636) |

&nbsp;

**_Orientações sobre os campos:_**

## DESCRIÇÃO

Aceita Markdown.

&nbsp;

### COLLAPSES

- Os collapses são divididos por `- - -`
- O título dos collapses vai com `##` antes
- Modelo de descrição com collapses em Markdown:
- **Obrigatório emover as barras antes dos jogos da velha (hashtag) do exemplo em markdown**.

&nbsp;

```markdown
Ad duis nulla consectetur magna consequat incididunt non sit eu culpa officia consequat eiusmod. In dolor excepteur excepteur adipisicing non est nostrud nulla mollit elit amet elit nostrud. Ipsum veniam ut cupidatat duis commodo fugiat sunt irure amet irure proident pariatur dolor. Minim minim occaecat esse eu. Dolore cillum eiusmod et tempor velit id cupidatat eu exercitation irure anim. Aliqua amet est irure eiusmod pariatur sit elit occaecat non qui quis consequat quis sit.

---

\#\# Título 1

Ad duis nulla consectetur magna consequat incididunt non sit eu culpa officia consequat eiusmod. In dolor excepteur excepteur adipisicing....

Ad duis nulla consectetur magna consequat incididunt non sit eu culpa officia consequat eiusmod. In dolor excepteur excepteur adipisicing....

---

\#\# Título 2

Ad duis nulla consectetur magna consequat incididunt non sit eu culpa officia consequat eiusmod. In dolor excepteur excepteur adipisicing....
```

&nbsp;

## VARIANTES

### ATRIBUTO 1 - COR

Para mostrar a cor em quadradinho/bolinha no campo onde vai o nome da cor colocar o hexadecimal depois do título da cor divido por `|`

Exemplo: `Amarelo | #ECE681`

&nbsp;

### ATRIBUTO 2 - TAMANHO

Tamanho do produto

&nbsp;

### ATRIBUTO 3

Escolher terceiro atributo do produto.

**_Observação:_**
Se desejar ativar atributo três, pedir para o desenvolvedor colocar o título correto no filtro

&nbsp;

## GUIA DE MEDIDAS

**_Informações:_**

| Dúvida                | Instrução                                                                      |
| --------------------- | ------------------------------------------------------------------------------ |
| **Onde cadastrar**    | Tags                                                                           |
| **Onde será exibido** | Popup de guia de medidas na página de produto                                  |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/tags/editar?id=guia-de-medidas)       |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                                  |
| ------------- | ------------------- | ----------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag, que também será o link para a listagem |
| **Título**    | :large_blue_circle: | Não será exibido no front                                   |
| **Subtítulo** | :no_entry:          |                                                             |
| **Descrição** | :large_blue_circle: | Conteúdo da coluna da direita da popup                      |
| **Tipo**      | :black_circle:      | `guia-de-medidas`                                           |
| **Imagem**    | :large_blue_circle: | Imagem da coluna da esquerda da popup                       |

&nbsp;

## BANNER EXTRA

**_Observações:_**

Inserir a tag nos produtos em que deseja que tenham esse banner a baixo do produto.

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                            |
| **Onde será exibido** | Banner extra com imagem e texto ao lado a baixo das infos do produto            |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/tags/editar?id=banner-produto-exemplo) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                                  |
| ------------- | ------------------- | ----------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag, que também será o link para a listagem |
| **Título**    | :large_blue_circle: | Título                                                      |
| **Subtítulo** | :large_blue_circle: | Upper title a cima do título                                |
| **Descrição** | :large_blue_circle: | Breve descrição                                             |
| **Tipo**      | :black_circle:      | `banner`                                                    |
| **Imagem**    | :black_circle:      | Dimensão sugerida 1000x680 pixels                           |

&nbsp;

## SEÇÃO COMPRE JUNTO (até 3 produtos)

**_Observações_**

- A tag agrupa os produtos.
- A seção vai aparecer na página de todos os produtos onde ela estiver.
- Adicionar a tag no mínimo em 2 (contanto o produto principal da página) e no máximo em 3 produtos.

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                                                          |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                               |
| **Onde será exibido** | Seção de compre junto                                                              |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/tags/editar?id=comprejunto-produto-teste) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                                  |
| ------------- | ------------------- | ----------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag, que também será o link para a listagem |
| **Título**    | :large_blue_circle: | Título da seção                                             |
| **Subtítulo** | :no_entry:          |                                                             |
| **Descrição** | :no_entry:          |                                                             |
| **Tipo**      | :black_circle:      | `compre-junto`                                              |
| **Imagem**    | :no_entry:          |                                                             |

&nbsp;

## PRODUTOS RELACIONADOS

São um grupo de produtos agrupados por tag que são exibidos no final da página de produto

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                                            |
| --------------------- | -------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                 |
| **Onde será exibido** | No final da interna de produto                                       |
| **Cadastro exemplo**  | [Admin](https://template2.vnda.dev/admin/tags/editar?id=teste-relacionado) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                      |
| ------------- | ------------------- | ----------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag                             |
| **Título**    | :large_blue_circle: | Inserir o título da sessão                      |
| **Subtítulo** | :large_blue_circle: | Texto do botão para a listagem dos relacionados |
| **Descrição** | :no_entry:          |                                                 |
| **Tipo**      | :black_circle:      | `relacionado`                                   |
| **Imagem**    | :no_entry:          |                                                 |

***
