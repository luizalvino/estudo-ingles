import { lessonContents, type LessonContent } from "@/content"

const presentPerfectContinuousPractice: LessonContent = {
  id: "present-perfect-continuous-pratica",
  intro:
    "Treino pesado de present perfect continuous com correção imediata: aquecimento, quiz de múltipla escolha e diálogos. Conteúdo baseado nos exercícios E, G e H da Unit 1 (Present time) do livro Destination C1–C2.",
  sections: [
    {
      id: "aquecimento",
      title: "1. Aquecimento",
      body: [
        "Digite a resposta e clique em Verificar (ou aperte Enter). Vale maiúscula ou minúscula, com ou sem ponto final — o que conta é a estrutura.",
      ],
      exercises: [
        {
          prompt: "Complete: She ___ (work) here for five years.",
          answer: "She's been working here for five years.",
          explanation: "Terceira pessoa usa has → 's been + working; for + período.",
          acceptedAnswers: [
            "She's been working here for five years.",
            "She has been working here for five years.",
          ],
        },
        {
          prompt: "Complete: How long ___ (you/learn) English?",
          answer: "How long have you been learning English?",
          explanation: "Pergunta sobre duração até o presente: have + been + -ing.",
          acceptedAnswers: ["How long have you been learning English?"],
        },
        {
          prompt: "Complete: Has Jan ___ (work) for the company since it started?",
          answer: "Has Jan been working for the company since it started?",
          explanation: "Since + ponto inicial pede duração → been working.",
          acceptedAnswers: [
            "Has Jan been working for the company since it started?",
          ],
        },
        {
          prompt: "Complete com o tempo certo (número!): I ___ (write) two essays this week.",
          answer: "I've written two essays this week.",
          explanation: "Número de coisas (two) → present perfect simple, não continuous.",
          acceptedAnswers: [
            "I've written two essays this week.",
            "I have written two essays this week.",
          ],
        },
        {
          prompt: "Complete (estado, sem -ing): I ___ (think) it's important to know how to use a computer.",
          answer: "I think it's important to know how to use a computer.",
          explanation: "Think = acreditar (estado) → simple; -ing mudaria o sentido para 'considerar'.",
          acceptedAnswers: [
            "I think it's important to know how to use a computer.",
          ],
        },
      ],
    },
    {
      id: "quiz",
      title: "2. Quiz — escolha a opção",
      body: [
        "Clique na opção correta. Itens baseados nos exercícios G e H da Unit 1: simple vs continuous, stative verbs e marcadores.",
      ],
      exercises: [
        {
          prompt: "I ___ over 18 press releases this morning so far. (send off)",
          answer: "'ve sent off",
          explanation: "Número de coisas (over 18) → present perfect simple.",
          options: ["'ve sent off", "'ve been sending off", "sent off", "send off"],
          correctIndex: 0,
        },
        {
          prompt: "Is it the first time ___ squid? (you / ever / eat)",
          answer: "you've ever eaten",
          explanation: "First time + ever → present perfect simple.",
          options: ["you've ever been eating", "you've ever eaten", "you ever ate", "you eat"],
          correctIndex: 1,
        },
        {
          prompt: "___ for you for the past two hours! Where have you been? (we / wait)",
          answer: "We've been waiting",
          explanation: "Duração se arrastando até agora → present perfect continuous.",
          options: ["We waited", "We've waited", "We've been waiting", "We're waiting"],
          correctIndex: 2,
        },
        {
          prompt: "___ an e-mail from Ruth? (you / just / receive)",
          answer: "Have you just received",
          explanation: "Just → present perfect simple (forma britânica do livro).",
          options: ["Do you just receive", "Have you just been receiving", "Did you just receive", "Have you just received"],
          correctIndex: 3,
        },
        {
          prompt: "___ a delivery for the past four hours. (we / expect)",
          answer: "We've been expecting",
          explanation: "For the past four hours (duração) → present perfect continuous.",
          options: ["We've been expecting", "We've expected", "We expected", "We're expecting"],
          correctIndex: 0,
        },
        {
          prompt: "Oh, Clair, my mum ___ to ask you for a while. (mean)",
          answer: "'s been meaning",
          explanation: "A expressão 'mean to' usa o continuous com duração (for a while).",
          options: ["'s meant", "'s been meaning", "means", "meant"],
          correctIndex: 1,
        },
        {
          prompt: "Jake and I have ___ about where to go on holiday for weeks. (think)",
          answer: "been thinking",
          explanation: "For weeks (duração) → present perfect continuous.",
          options: ["thought", "think", "been thinking", "thinking"],
          correctIndex: 2,
        },
        {
          prompt: "Excuse me, ___ walnuts? (the nut cake / contain)",
          answer: "does the nut cake contain",
          explanation: "Contain descreve relação (stative) → simple, mesmo perguntando agora.",
          options: ["did the nut cake contain", "is the nut cake containing", "has the nut cake been containing", "does the nut cake contain"],
          correctIndex: 3,
        },
      ],
    },
    {
      id: "dialogos",
      title: "3. Diálogos: past continuous vs PPC",
      body: [
        "Diálogos do exercício E da Unit 1. Decida se o momento é encerrado no passado (past continuous) ou continua até agora (PPC). Tente completar e só então confira o gabarito do livro.",
      ],
      exercises: [
        {
          prompt: "'Why are you out of breath?' 'Because I ___ for the last hour.' (exercise)",
          answer: "Because I have been exercising for the last hour.",
          explanation: "For the last hour (duração até agora) → PPC. O cansaço se explica pela ação.",
        },
        {
          prompt: "'Your light was on when I walked past last night.' 'Yes, I ___ online to my cousin in Australia.' (chat)",
          answer: "Yes, I was chatting online to my cousin in Australia.",
          explanation: "Momento encerrado (last night) → past continuous.",
        },
        {
          prompt: "'You've really improved on the flute.' 'Well, I hope so because I ___ a lot lately.' (practise)",
          answer: "Well, I hope so because I have been practising a lot lately.",
          explanation: "Lately + duração → PPC.",
        },
        {
          prompt: "'You're not jealous of my other friends, are you?' 'No, but you ___ quite a lot of them recently.' (see)",
          answer: "No, but you have been seeing quite a lot of them recently.",
          explanation: "Recently + repetição em período até agora → PPC.",
        },
        {
          prompt: "'I didn't wake you up, did I?' 'No, I ___.' (sleep)",
          answer: "No, I wasn't sleeping.",
          explanation: "No momento da ligação, a pessoa já estava acordada: momento encerrado → past continuous na negativa.",
        },
        {
          prompt: "'Did you quit your job in the end?' 'I ___ of doing so for a long time, but then I decided not to.' (think)",
          answer: "I was thinking of doing so for a long time, but then I decided not to.",
          explanation: "Mesmo com for a long time, o contexto encerrou no passado (decided) → past continuous.",
        },
        {
          prompt: "'Why is your street such a mess?' 'Oh, the council ___ up the roads, but they should finish this weekend.' (dig)",
          answer: "Oh, the council have been digging up the roads, but they should finish this weekend.",
          explanation: "Ação recente em andamento com efeito visível → PPC (have coletivo, BrE).",
        },
      ],
    },
    {
      id: "extras",
      title: "4. Extras — marcadores e stative verbs",
      body: [
        "Mais 8 questões dos exercícios D, G e I da Unit 1: marcadores de tempo e verbos de estado.",
      ],
      exercises: [
        {
          prompt: "Complete: We've had broadband at home ___ about 2005.",
          answer: "since",
          explanation: "Since + ponto no tempo (about 2005).",
          acceptedAnswers: ["since"],
        },
        {
          prompt: "Complete: I've been looking for a website like this ___ ages!",
          answer: "for",
          explanation: "For + período de tempo (ages).",
          acceptedAnswers: ["for"],
        },
        {
          prompt: "Complete: I ___ haven't found my sunglasses.",
          answer: "still",
          explanation: "Still = até agora, ainda não.",
          acceptedAnswers: ["still"],
        },
        {
          prompt: "Complete: We haven't started ___ so you can join in if you like.",
          answer: "yet",
          explanation: "Yet = até agora (em negativas e perguntas).",
          acceptedAnswers: ["yet"],
        },
        {
          prompt: "Each song only ___ 50 cents at the moment because they're on special offer.",
          answer: "costs",
          explanation: "Cost descreve preço (estado) → simple, mesmo com at the moment.",
          options: ["costs", "is costing", "has cost", "cost"],
          correctIndex: 0,
        },
        {
          prompt: "I ___ that woman over there. Wasn't she on that quiz show last night?",
          answer: "recognise",
          explanation: "Recognise é verbo de percepção (estado) → simple.",
          options: ["am recognising", "recognise", "have recognised", "was recognising"],
          correctIndex: 1,
        },
        {
          prompt: "Stay out of this, Simon, it ___ you at all.",
          answer: "doesn't concern",
          explanation: "Concern descreve relação (estado) → simple.",
          options: ["hasn't concerned", "isn't concerning", "doesn't concern", "don't concern"],
          correctIndex: 2,
        },
        {
          prompt: "Right now, my job ___ a huge amount of foreign travel.",
          answer: "involves",
          explanation: "Involve descreve relação (estado) → simple.",
          options: ["involve", "is involving", "has involved", "involves"],
          correctIndex: 3,
        },
      ],
    },
  ],
}

lessonContents[presentPerfectContinuousPractice.id] =
  presentPerfectContinuousPractice
