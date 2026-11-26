import { lessonContents, type LessonContent } from "@/content"

const pastTime: LessonContent = {
  id: "past-time",
  intro:
    "O past time cobre o que aconteceu antes de agora: past simple, past continuous, past perfect (simple e continuous) e hábitos no passado. Conteúdo baseado na Unit 3 (Past time) do livro Destination C1–C2.",
  sections: [
    {
      id: "past-simple",
      title: "1. Past simple: a base",
      body: [
        "Forma: verbo + -ed nos regulares; irregulares têm forma própria (go → went, see → saw). Perguntas e negativas usam did/didn't + infinitivo.",
        "Usos: ação única concluída, ações repetidas ou habituais no passado, verdades gerais sobre o passado, situações permanentes/estados e os eventos principais de uma história.",
        "Past simple enfático: did + infinitivo para contrastar ou dar ênfase (they did have the telephone).",
      ],
      examples: [
        {
          en: "Sony and Philips invented the CD in the early 1980s.",
          pt: "A Sony e a Philips inventaram o CD no início dos anos 1980.",
          note: "Ação única concluída, com tempo específico.",
        },
        {
          en: "When I was a child, I visited my grandmother every week.",
          pt: "Quando eu era criança, visitava minha avó toda semana.",
          note: "Ação repetida no passado.",
        },
        {
          en: "Perhaps our grandparents didn't have e-mail, but they did have the telephone and telegrams.",
          pt: "Talvez nossos avós não tivessem e-mail, mas eles tinham telefone e telegramas.",
          note: "Did have: ênfase/contraste.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: Sony and Philips ___ (invent) the CD in the early 1980s.",
          answer: "invented",
          explanation: "Ação concluída com tempo específico → past simple.",
        },
        {
          prompt: "Enfatize o contraste: Perhaps our grandparents didn't have e-mail, but they ___ (have) the telephone.",
          answer: "did have",
          explanation: "Did + infinitivo enfatiza o contraste no passado.",
        },
      ],
    },
    {
      id: "past-simple-vs-present-perfect",
      title: "2. Past simple vs. present perfect simple",
      body: [
        "Past simple: períodos ou momentos encerrados, com tempo específico (six months ago, yesterday, in 1990).",
        "Present perfect: períodos que continuam até o presente, quando o momento específico não importa ou quando o resultado presente é o ponto importante.",
      ],
      examples: [
        {
          en: "I sent my first e-mail six months ago.",
          pt: "Enviei meu primeiro e-mail há seis meses.",
          note: "Tempo específico e encerrado → past simple.",
        },
        {
          en: "Have you ever sent an e-mail before?",
          pt: "Você já enviou um e-mail antes?",
          note: "Experiência; o momento exato não importa → present perfect.",
        },
        {
          en: "There have been many technological advances in recent years.",
          pt: "Houve muitos avanços tecnológicos nos últimos anos.",
          note: "Período que continua até o presente → present perfect.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: I ___ (send) my first e-mail six months ago.",
          answer: "sent",
          explanation: "Six months ago fecha o período → past simple.",
        },
        {
          prompt: "Complete: ___ you ever ___ (send) an e-mail before?",
          answer: "Have ... sent",
          explanation: "Ever + experiência de vida → present perfect.",
        },
      ],
    },
    {
      id: "past-continuous",
      title: "3. Past continuous: em andamento",
      body: [
        "Forma: was/were + verbo-ing. Descreve ações em progresso em um momento ou período do passado.",
        "Usos: ação em progresso num momento específico; ação em progresso ao redor de um momento; situação temporária; situação em mudança; pano de fundo de uma história; duas ações simultâneas; hábito passado irritante ou engraçado (geralmente com always).",
      ],
      examples: [
        {
          en: "Were you chatting to Matt online at midnight last night?",
          pt: "Você estava conversando com o Matt online à meia-noite ontem?",
          note: "Ação em progresso num momento específico.",
        },
        {
          en: "At the turn of the twentieth century, many discoveries were being made in physics.",
          pt: "Na virada do século XX, muitas descobertas estavam sendo feitas na física.",
          note: "Ação em progresso ao redor de um período (passiva).",
        },
        {
          en: "When she was young, Tina was always taking things apart to see how they worked.",
          pt: "Quando era jovem, Tina estava sempre desmontando coisas para ver como funcionavam.",
          note: "Hábito irritante com always → past continuous.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: At midnight last night, I ___ (chat) online with my cousin.",
          answer: "was chatting",
          explanation: "Ação em progresso num momento específico do passado.",
        },
        {
          prompt: "Complete: When she was young, Tina ___ always ___ (take) things apart.",
          answer: "was always taking",
          explanation: "Always + past continuous marca hábito passado irritante.",
        },
      ],
    },
    {
      id: "past-simple-vs-past-continuous",
      title: "4. Past simple vs. past continuous",
      body: [
        "O past continuous descreve eventos de fundo em progresso; o past simple descreve os eventos principais.",
        "Ações regulares ou repetidas no passado usam past simple, não past continuous.",
      ],
      examples: [
        {
          en: "We were talking about MP3s when Andrea mentioned her new music website.",
          pt: "Estávamos falando sobre MP3s quando a Andrea mencionou o site de música dela.",
          note: "Fundo (were talking) + evento principal (mentioned).",
        },
        {
          en: "When I was a child, I visited my grandmother every week.",
          pt: "Quando eu era criança, visitava minha avó toda semana.",
          note: "Ação repetida → past simple (não was visiting).",
        },
      ],
      exercises: [
        {
          prompt: "Complete: We ___ (talk) about MP3s when Andrea ___ (mention) her new website.",
          answer: "were talking ... mentioned",
          explanation: "Fundo em progresso + evento principal no past simple.",
        },
        {
          prompt: "Certo ou errado? When I was a child, I was visiting my grandmother every week.",
          answer: "Errado: ações repetidas pedem past simple — I visited.",
          explanation: "O past continuous não descreve hábitos repetidos.",
        },
      ],
    },
    {
      id: "past-perfect-simple",
      title: "5. Past perfect simple: antes do passado",
      body: [
        "Forma: had + past participle. Situa uma ação ou estado antes de outro momento no passado.",
        "Usos: situações/estados antes do passado; ações concluídas antes de um momento passado; série de ações até um momento passado; ação cujo resultado importava naquele momento passado.",
      ],
      examples: [
        {
          en: "When Dimitra called, I had managed to fix her computer.",
          pt: "Quando a Dimitra ligou, eu tinha conseguido consertar o computador dela.",
          note: "Consertar aconteceu antes da ligação.",
        },
        {
          en: "By the time of his death, Thomas Edison had invented a number of things that changed everyday life.",
          pt: "Na época da morte dele, Thomas Edison tinha inventado uma série de coisas que mudaram a vida cotidiana.",
          note: "Série de ações até um momento passado.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: When Dimitra ___ (call), I ___ (manage) to fix her computer.",
          answer: "called ... had managed",
          explanation: "O conserto veio antes da ligação → past perfect.",
        },
        {
          prompt: "Complete: By the time of his death, Edison ___ (invent) a number of things.",
          answer: "had invented",
          explanation: "By the time of + evento passado → had + particípio.",
        },
      ],
    },
    {
      id: "past-perfect-continuous",
      title: "6. Past perfect continuous: até um momento passado",
      body: [
        "Forma: had been + verbo-ing. Descreve ações ou situações que vinham acontecendo até um momento no passado (ou pouco antes dele).",
        "O foco está na duração da ação até aquele ponto do passado.",
      ],
      examples: [
        {
          en: "She'd been writing computer games for over ten years before she finally had a hit.",
          pt: "Ela vinha escrevendo jogos de computador há mais de dez anos antes de finalmente ter um sucesso.",
          note: "Duração até o momento passado (finally had a hit).",
        },
      ],
      exercises: [
        {
          prompt: "Complete: She ___ (write) computer games for over ten years before she finally had a hit.",
          answer: "had been writing",
          explanation: "Duração até um momento passado → had been + -ing.",
        },
        {
          prompt: "Complete: We ___ (work) on the project for four hours when the manager gave us a break.",
          answer: "had been working",
          explanation: "A ação vinha durando quatro horas até a pausa.",
        },
      ],
    },
    {
      id: "habitos-passado",
      title: "7. Hábitos no passado: used to e would",
      body: [
        "Used to + infinitivo: hábitos e estados no passado (It used to seem strange...). Would + infinitivo: hábitos no passado, especialmente distantes; normalmente não é usado para estados.",
        "Não confunda used to com be used to: be used to + substantivo/-ing = estar acostumado; get used to = ficar acostumado (processo).",
      ],
      examples: [
        {
          en: "The ancient Greeks would rely on the power of slaves, rather than machines.",
          pt: "Os antigos gregos costumavam depender da força de escravos, em vez de máquinas.",
          note: "Would + infinitivo para hábito passado distante.",
        },
        {
          en: "It used to seem strange to be able to communicate over long distances.",
          pt: "Costumava parecer estranho poder se comunicar a longas distâncias.",
          note: "Estado passado → used to (não would).",
        },
        {
          en: "At first, people found it strange sending messages by mobile, but now everyone's used to it.",
          pt: "No início, as pessoas achavam estranho enviar mensagens por celular, mas agora todo mundo está acostumado.",
          note: "Be used to = estar acostumado (situação atual).",
        },
      ],
      exercises: [
        {
          prompt: "Complete: The ancient Greeks ___ (would/rely) on the power of slaves.",
          answer: "would rely",
          explanation: "Would + infinitivo para hábito passado.",
        },
        {
          prompt: "Complete: Now everyone ___ (be) used to sending messages by mobile.",
          answer: "is",
          explanation: "Be used to = estar acostumado; be conjugado no presente.",
        },
      ],
    },
    {
      id: "treino-rapido",
      title: "8. Treino rápido",
      body: [
        "Questões curtas para fixar os tempos do passado. O modo drill usa exatamente estas questões.",
      ],
      exercises: [
        {
          prompt: "Complete: When I was a child, I ___ (visit) my grandmother every week.",
          answer: "visited",
          explanation: "Ação repetida no passado → past simple.",
          acceptedAnswers: ["visited"],
        },
        {
          prompt: "Complete: When Dimitra called, I ___ (manage) to fix her computer.",
          answer: "had managed",
          explanation: "O conserto veio antes da ligação → past perfect.",
          acceptedAnswers: ["had managed"],
        },
        {
          prompt: "Complete: She ___ (write) computer games for over ten years before she had a hit.",
          answer: "had been writing",
          explanation: "Duração até um momento passado → past perfect continuous.",
          acceptedAnswers: ["had been writing"],
        },
        {
          prompt: "Complete: I sent my first e-mail six months ___.",
          answer: "ago",
          explanation: "Ago marca um ponto no passado → past simple.",
          acceptedAnswers: ["ago"],
        },
        {
          prompt: "Sony and Philips ___ the CD in the early 1980s.",
          answer: "invented",
          explanation: "Tempo específico e encerrado → past simple.",
          options: ["invented", "have invented", "invent", "were inventing"],
          correctIndex: 0,
        },
        {
          prompt: "___ you ever sent an e-mail before?",
          answer: "Have",
          explanation: "Experiência de vida → present perfect.",
          options: ["Did", "Have", "Do", "Were"],
          correctIndex: 1,
        },
        {
          prompt: "We ___ about MP3s when Andrea mentioned her new website.",
          answer: "were talking",
          explanation: "Evento de fundo em progresso → past continuous.",
          options: ["talked", "were talking", "have talked", "had talked"],
          correctIndex: 1,
        },
        {
          prompt: "It ___ seem strange to be able to communicate over long distances.",
          answer: "used to",
          explanation: "Estado passado → used to; would não é usado para estados.",
          options: ["used to", "would", "was used to", "got used to"],
          correctIndex: 0,
        },
      ],
    },
  ],
}

lessonContents[pastTime.id] = pastTime
