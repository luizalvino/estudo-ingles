import { lessonContents, type LessonContent } from "@/content"

const presentPerfectContinuous: LessonContent = {
  id: "present-perfect-continuous",
  intro:
    "O present perfect continuous fala de ações e situações que vêm acontecendo até o presente — com ênfase na duração. Conteúdo baseado na Unit 1 (Present time) do livro Destination C1–C2.",
  sections: [
    {
      id: "forma-basica",
      title: "1. A forma básica",
      body: [
        "Estrutura: have/has + been + verbo com -ing. O been é invariável; o que muda é o have/has. Na escrita e na fala, have e has quase sempre aparecem contraídos: I've been, she's been, they've been.",
        "Na interrogativa, have/has vai para o início (Have you been waiting long?). Na negativa, n't depois do have/has (They haven't been sleeping well).",
      ],
      examples: [
        {
          en: "We've all been wondering what to get Tony for his birthday and we just can't decide.",
          pt: "Estamos todos nos perguntando o que dar ao Tony de aniversário e simplesmente não conseguimos decidir.",
          note: "Exemplo do livro: ação que continua até o presente. We've = we have.",
        },
        {
          en: "I won't take my driving test until I've been having lessons for at least two months.",
          pt: "Não vou fazer o exame de direção até estar tendo aulas há pelo menos dois meses.",
          note: "Exemplo do livro: PPC em oração temporal com until (ver Unit 5).",
        },
      ],
      exercises: [
        {
          prompt: "Complete: She ___ (live) in London since 2019.",
          answer: "She's been living in London since 2019.",
          explanation: "Terceira pessoa (she) usa has → 's been + living; since marca o ponto inicial.",
        },
        {
          prompt: "Reescreva com a contração: I have been learning English for two years.",
          answer: "I've been learning English for two years.",
          explanation: "I have vira I've; o resto da estrutura não muda.",
        },
      ],
    },
    {
      id: "duracao-ate-presente",
      title: "2. Duração até o presente",
      body: [
        "Usamos o present perfect continuous para ações e situações que continuam até o presente (ou até pouco antes dele). O foco está no desenrolar da ação, não no seu fim.",
        "É o tempo da resposta a 'Why are you out of breath?' — o cansaço agora se explica pela ação que vinha acontecendo: for the last hour, lately, recently, so far.",
      ],
      examples: [
        {
          en: "We have been working on my computer for four hours so far.",
          pt: "Estamos trabalhando no meu computador há quatro horas até agora.",
          note: "Exemplo do livro: período que continua até agora (so far).",
        },
        {
          en: "Jake and I have been thinking about where to go on holiday for weeks but we just can't decide.",
          pt: "Eu e o Jake estamos pensando há semanas para onde ir nas férias, mas simplesmente não conseguimos decidir.",
          note: "For weeks: duração longa e ainda em aberto.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: We ___ (wonder) what to get Tony for weeks.",
          answer: "We've been wondering what to get Tony for weeks.",
          explanation: "Ação que continua até o presente: have + been + -ing; we've = we have.",
        },
        {
          prompt: "Duração ou momento encerrado? I have been exercising for the last hour.",
          answer: "Duração até o presente: for the last hour liga a ação ao agora.",
          explanation: "O resultado (estar sem fôlego) se explica pela ação que vinha acontecendo.",
        },
      ],
    },
    {
      id: "marcadores-since-for",
      title: "3. Marcadores: since, for, just, all day",
      body: [
        "Os marcadores típicos do PPC: since (ponto inicial: since 2019, since it started), for (período: for two hours, for weeks), just (acabou de / somente), e all day / all week (o dia / a semana toda).",
        "Regra prática: since + ponto no tempo; for + quantidade de tempo. I have been standing up all day dispensa preposição.",
      ],
      examples: [
        {
          en: "Has Jan been working for the company since it started?",
          pt: "A Jan vem trabalhando na empresa desde que ela começou?",
          note: "Since + ponto inicial (it started).",
        },
        {
          en: "I've been standing up all day and my feet are killing me!",
          pt: "Estou de pé o dia todo e meus pés estão me matando!",
          note: "All day: duração total, sem preposição.",
        },
      ],
      exercises: [
        {
          prompt: "Complete com since ou for: Has Jan been working here ___ it started?",
          answer: "Has Jan been working here since it started?",
          explanation: "Since + ponto no tempo (it started); for exigiria um período (for years).",
        },
        {
          prompt: "Complete com since ou for: I've been waiting ___ two hours.",
          answer: "I've been waiting for two hours.",
          explanation: "For + período de tempo (two hours); since exigiria um ponto (since noon).",
        },
      ],
    },
    {
      id: "simple-vs-continuous",
      title: "4. Simple vs. continuous: número ou duração?",
      body: [
        "O contraste central da Unit 1: o present perfect simple especifica um número de vezes ou coisas (I've written two essays), enquanto o present perfect continuous enfatiza a duração (I've been working here for five years).",
        "Pergunte-se: o importante é quantas coisas foram feitas (simple) ou há quanto tempo a ação dura (continuous)?",
      ],
      examples: [
        {
          en: "I've written two essays this week.",
          pt: "Escrevi dois textos esta semana.",
          note: "Simple: o número (two) é o ponto importante.",
        },
        {
          en: "I've been working here for five years.",
          pt: "Estou trabalhando aqui há cinco anos.",
          note: "Continuous: a duração (five years) é o ponto importante. Sem ênfase, diríamos I've worked here for five years.",
        },
        {
          en: "We've seen the Tower of London, Buckingham Palace and Oxford Street, and we've only been in London for three hours!",
          pt: "Vimos a Torre de Londres, o Palácio de Buckingham e a Oxford Street — e estamos em Londres há só três horas!",
          note: "Seen: série de ações completas (lugares visitados).",
        },
      ],
      exercises: [
        {
          prompt: "Simple ou continuous? I've sent off over 18 press releases this morning so far.",
          answer: "Simple: o número (over 18) é o ponto importante.",
          explanation: "Quantidade de coisas feitas → present perfect simple (sent off).",
        },
        {
          prompt: "Simple ou continuous? We've been waiting for you for the past two hours.",
          answer: "Continuous: a duração (two hours) é o ponto importante.",
          explanation: "Período se arrastando até agora → present perfect continuous.",
        },
      ],
    },
    {
      id: "stative-verbs",
      title: "5. Stative verbs: o simple obrigatório",
      body: [
        "Verbos que descrevem estados (não ações) usam tempos simples, não continuous: comunicação (agree, deny), pensamento (believe, know, mean), existência (be), emoções (love, hate, want), percepção (hear, see, seem) e posse/relações (belong, contain, cost, have).",
        "Vários desses verbos têm uso duplo: no sentido de estado vão para o simple; no sentido de ação vão para o continuous (appeal, be, consider, depend, feel, have, include, look, mean, mind, see, smell, taste, think, weigh).",
      ],
      examples: [
        {
          en: "I think it's important to know how to use a computer.",
          pt: "Acho importante saber usar um computador.",
          note: "Think = acreditar (estado) → simple.",
        },
        {
          en: "I'm thinking about going on a computer course.",
          pt: "Estou pensando em fazer um curso de informática.",
          note: "Think = considerar (ação mental) → continuous. O sentido muda com o tempo verbal.",
        },
      ],
      exercises: [
        {
          prompt: "Escolha: I think / I'm thinking it's important to know how to use a computer.",
          answer: "I think it's important to know how to use a computer.",
          explanation: "Think aqui = acreditar (estado), então simple — sem -ing.",
        },
        {
          prompt: "Escolha: Excuse me, does the nut cake contain / is the nut cake containing walnuts?",
          answer: "Excuse me, does the nut cake contain walnuts?",
          explanation: "Contain descreve relação/posse (stative) → simple, mesmo no presente.",
        },
      ],
    },
    {
      id: "past-continuous-vs-ppc",
      title: "6. Past continuous vs. present perfect continuous",
      body: [
        "O past continuous descreve ações em progresso em períodos ou momentos encerrados (We were working on my computer for four hours yesterday). O present perfect continuous descreve ações em progresso em períodos que continuam até o presente (We have been working on my computer for four hours so far).",
        "Atenção ao detalhe: mesmo com for + período, se o contexto encerrou a ação no passado (but then I decided), o passado leva a frase — ver o exercício da aula prática.",
      ],
      examples: [
        {
          en: "We were working on my computer for four hours yesterday.",
          pt: "Estávamos trabalhando no meu computador por quatro horas ontem.",
          note: "Período encerrado (yesterday) → past continuous.",
        },
        {
          en: "We have been working on my computer for four hours so far.",
          pt: "Estamos trabalhando no meu computador há quatro horas até agora.",
          note: "Período que continua (so far) → present perfect continuous.",
        },
      ],
      exercises: [
        {
          prompt: "Past ou PPC? Yes, I was chatting online to my cousin when you walked past last night.",
          answer: "Past continuous: momento encerrado (last night).",
          explanation: "A ação acontecia num momento passado já terminado — sem ligação com o agora.",
        },
        {
          prompt: "Past ou PPC? Oh, the council have been digging up the roads, but they should finish this weekend.",
          answer: "PPC: ação recente em andamento com efeito visível agora.",
          explanation: "A rua esburacada agora se explica pela ação que vem acontecendo; have coletivo (BrE).",
        },
      ],
    },
    {
      id: "treino-rapido",
      title: "7. Treino rápido",
      body: [
        "Questões curtas de forma, marcadores e verbos de estado. O modo drill usa exatamente estas questões.",
      ],
      exercises: [
        {
          prompt: "Complete: They ___ (work) on the project since Monday.",
          answer: "They've been working on the project since Monday.",
          explanation: "Since + ponto inicial → have + been + -ing.",
          acceptedAnswers: [
            "They've been working on the project since Monday.",
            "They have been working on the project since Monday.",
          ],
        },
        {
          prompt: "Complete: I ___ (read) that book for two weeks.",
          answer: "I've been reading that book for two weeks.",
          explanation: "For + período, ação que continua até agora → PPC.",
          acceptedAnswers: [
            "I've been reading that book for two weeks.",
            "I have been reading that book for two weeks.",
          ],
        },
        {
          prompt: "Complete com since ou for: We've been living here ___ 2020.",
          answer: "since",
          explanation: "Since + ponto no tempo (2020).",
          acceptedAnswers: ["since"],
        },
        {
          prompt: "Complete com since ou for: She's been studying English ___ three years.",
          answer: "for",
          explanation: "For + período de tempo (three years).",
          acceptedAnswers: ["for"],
        },
        {
          prompt: "How long ___ you been waiting here?",
          answer: "have",
          explanation: "Pergunta com you → have + been + -ing.",
          options: ["have", "has", "are", "were"],
          correctIndex: 0,
        },
        {
          prompt: "He ___ been working here since 2018.",
          answer: "has",
          explanation: "Terceira pessoa (he) → has + been + -ing.",
          options: ["have", "has", "is", "was"],
          correctIndex: 1,
        },
        {
          prompt: "I ___ two essays this week.",
          answer: "have written",
          explanation: "Número de coisas (two) → present perfect simple.",
          options: ["wrote", "have been writing", "have written", "write"],
          correctIndex: 2,
        },
        {
          prompt: "This chicken ___ very fresh, I think I'll throw it away.",
          answer: "smells",
          explanation: "Smell descreve percepção (estado) → simple.",
          options: ["has smelled", "is smelling", "has been smelling", "smells"],
          correctIndex: 3,
        },
      ],
    },
  ],
}

lessonContents[presentPerfectContinuous.id] = presentPerfectContinuous
