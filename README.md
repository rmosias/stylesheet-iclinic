

### Pré-requisitos

Instale o cli do bit executando o comando yarn global add bit-bin
Verifique se você possui uma conta gratuita no `https://bit.dev` e se possui acesso a coleção

### `bit login`

Executa o login do bit atraves do terminal automaticamente

### Rastrear

Para começar a rastrear componentes no Bit, use o comando add. Uma vez que o componet tenha seus arquivos, o Bit pode identificar e verificar se todas as dependências do componente existem e todos os arquivos são rastreados. Bit também pode associar o componente a utilitários - como um compilador ou um testador - e começar a criar e testar o componente isoladamente.

### `bit add`

Comece a rastrear componentes no projeto. Um bom candidato para rastreamento é um componente claramente definido e isolado.
Use o comando bit add para rastrear um componente:

```bit add src/components/my-component.ts --id my-component```

Você pode rastrear vários componentes ao mesmo tempo:

```bit add src/components/*```

Isso rastreará todos os componentes no diretório src / components. Cada componente estará em um diretório nomeado após seu ID de componente.
Você também pode rastrear os arquivos de teste como parte de seus componentes anexando a flag --tests. Bit pode executar esses testes isoladamente e exibir os resultados.

### Publicar

Quando um componente está pronto para ser compartilhado com outros, o desenvolvedor o identifica com um número de versão, seguindo as convenções semver.
O Bit armazena o instantâneo do código-fonte do componente, permitindo que ele notifique os consumidores quando forem feitas alterações.
O desenvolvedor pode exportar uma versão marcada do componente para um servidor centralizado. O servidor centralizado pode ser de propriedade própria ou o serviço de nuvem bit.dev pode ser usado como servidor centralizado.

### Marcar a versão do componente

Para definir uma versão para seus componentes, use o comando ```bit tag```.
Bit bloqueia o estado dos arquivos do componente e seu gráfico de dependência. A versão marcada agora é imutável (não pode ser alterada).
Ao marcar componentes, o Bit executa primeiro as tarefas de compilação e teste dos componentes.
Você pode usar o sinalizador --all para marcar todos os componentes que foram alterados na área de trabalho.

```bit tag --all 1.0.0```

### Exportar componentes

Agora que nossos componentes são rastreados e versionados, exporte-os (publique) para uma coleção remota. As coleções hospedam e organizam seus componentes. Cada componente pode ser descoberto e consumido rapidamente em qualquer outro projeto e aplicativo.

```bit export team-material.material```


