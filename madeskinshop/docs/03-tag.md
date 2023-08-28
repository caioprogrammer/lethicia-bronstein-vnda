- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/03-tag.png)

# TAG

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |

&nbsp;

**_Informações:_**

| Dúvida                       | Instrução                                                         |
| ---------------------------- | ----------------------------------------------------------------- |
| **Onde cadastrar**           | Tags                                                              |
| **Onde será exibido**        | Página de listagem do produto                                     |
| **Cadastro exemplo**         | [Admin](https://template2.vnda.dev/admin/tags/editar?id=produtos) |
| **Página para visualização** | [Página](https://template2.vnda.dev/produtos)                     |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                                  |
| ------------- | ------------------- | ----------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag, que também será o link para a listagem |
| **Título**    | :large_blue_circle: | Não utilizado no front                                      |
| **Subtítulo** | :large_blue_circle: | Upper title a cima do título                                |
| **Descrição** | :large_blue_circle: | Breve descrição                                             |
| **Tipo**      | :large_blue_circle: |                                                             |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 1920x380 pixels                           |

&nbsp;

## FILTRO

### ATRIBUTO 1 - COR

&nbsp;

Primeiro atributo dos produtos da lista.

&nbsp;

### ATRIBUTO 2 - TAMANHO

Segundo atributo dos produtos da lista.

&nbsp;

### ATRIBUTO 3 - ESCOLHER NOME

Terceiro atributo dos produtos da lista.

**_Observação:_**

Se desejar ativar atributo três, pedir para o desenvolvedor colocar o título correto no filtro.

&nbsp;

### CATEGORIA

**_Informações sobre os campos_**

| Campo        | Funcional?          | Orientação  |
| ------------ | ------------------- | ----------- |
| **Tag Tipo** | :large_blue_circle: | `categoria` |

&nbsp;

### ORDENAÇÃO

- Mais recentes
- Mais antigos
- Menor preço
- Maior preço

&nbsp;

### PREÇO

Menor e maior preço dos produtos da tag.

&nbsp;

## TAG FLAG

***Informações:***

| Dúvida                          | Instrução                                                            |
| ------------------------------- | -------------------------------------------------------------------- |
| **Onde cadastrar**              | Tags                                                                 |
| **Onde será exibido**           | Como uma ***flag*** no produto da listagem e na interna              |
| **Cadastro exemplo em staging** | [Admin](https://template2.vnda.dev/admin/tags/editar?id=teste-flag) |

***Informações sobre os campos***

| Campo         | Funcional?          | Orientação                                                                          |
| ------------- | ------------------- | ----------------------------------------------------------------------------------- |
| **Nome**      | :black_circle:      | Inserir nome da tag                                                                 |
| **Título**    | :large_blue_circle: | Inserir o texto que será exibido                                                    |
| **Subtítulo** | :no_entry:          |                                                                                     |
| **Descrição** | :large_blue_circle: | Opções de cor do texto, cor do fundo e posição da tag                               |
| **Tipo**      | :large_blue_circle: | `flag`                                                                              |
| **Imagem**    | :large_blue_circle: | Opcional, substiui o texto do campo título, dimensão sugerida: 80 pixels de largura |

***Modelo de descrição***

```markdown
cor do texto: #3C3D41

cor do fundo: #e0af1f

posição: topo direita
```

***
