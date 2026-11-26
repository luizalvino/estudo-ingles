import { lessonContents, type LessonContent } from "@/content"

const pastTimePractice: LessonContent = {
  id: "past-time-pratica",
  intro:
    "Treino de past time com correção imediata: aquecimento, quiz de múltipla escolha e completions longas. Conteúdo baseado nos exercícios A, B, D, F e H da Unit 3 (Past time) do livro Destination C1–C2.",
  sections: [
    {
      id: "aquecimento",
      title: "1. Aquecimento",
      body: [
        "Digite a resposta e clique em Verificar (ou aperte Enter). Vale maiúscula ou minúscula, com ou sem ponto final — o que conta é a estrutura.",
      ],
      exercises: [
        {
          prompt: "Complete: Rick should know about the meeting because I ___ (tell) him about it yesterday.",
          answer: "told",
          explanation: "Yesterday fecha o período → past simple.",
          acceptedAnswers: ["told"],
        },
        {
          prompt: "Complete: Julie ___ (be) anxious to speak to you since she heard about your accident.",
          answer: "has been",
          explanation: "Since + ponto no passado → present perfect (período que continua).",
          acceptedAnswers: ["has been", "'s been"],
        },
        {
          prompt: "Complete: When the explosion happened, hundreds of people ___ (pass) through the airport.",
          answer: "were passing",
          explanation: "Ação em progresso no momento da explosão → past continuous.",
          acceptedAnswers: ["were passing"],
        },
        {
          prompt: "Complete: Amy ___ (read), so she didn't see me walking past.",
          answer: "was reading",
          explanation: "Ação em progresso no passado → was + -ing.",
          acceptedAnswers: ["was reading"],
        },
        {
          prompt: "Complete: Before I met Dr Christian, I ___ (see) a number of different specialists.",
          answer: "had seen",
          explanation: "Ação anterior a outro momento passado → past perfect.",
          acceptedAnswers: ["had seen"],
        },
        {
          prompt: "Complete: When Tonya ___ (finish) eating, she asked the waiter to bring the bill.",
          answer: "had finished",
          explanation: "Terminar de comer veio antes de pedir a conta → past perfect.",
          acceptedAnswers: ["had finished"],
        },
      ],
    },
    {
      id: "quiz",
      title: "2. Quiz — escolha a opção",
      body: [
        "Clique na opção correta. Itens dos exercícios A e D da Unit 3: contraste past simple/present perfect, past continuous e past perfect.",
      ],
      exercises: [
        {
          prompt: "___ last July while you were both backpacking around Europe?",
          answer: "Did you meet",
          explanation: "Last July é um momento específico e encerrado → past simple.",
          options: ["Did you meet", "Have you met", "Do you meet", "Were you meeting"],
          correctIndex: 0,
        },
        {
          prompt: "I'm resigning because the pressure at work ___ too much for me.",
          answer: "has become",
          explanation: "Resultado presente de uma mudança passada → present perfect.",
          options: ["has become", "became", "was becoming", "had become"],
          correctIndex: 0,
        },
        {
          prompt: "A month ago, I ___ a letter from Neil, but I haven't replied.",
          answer: "got",
          explanation: "A month ago marca o momento → past simple (mesmo com resposta ainda pendente).",
          options: ["got", "have got", "get", "was getting"],
          correctIndex: 0,
        },
        {
          prompt: "It was my birthday last week and my grandad ___ me a new laptop.",
          answer: "gave",
          explanation: "Last week é tempo específico → past simple.",
          options: ["gave", "has given", "gives", "was giving"],
          correctIndex: 0,
        },
        {
          prompt: "My brother and I ___ to chew gum when we were young.",
          answer: "were never allowed",
          explanation: "Regra/estado no passado com tempo encerrado → past simple (passiva).",
          options: [
            "were never allowed",
            "have never been allowed",
            "never allowed",
            "had never allowed",
          ],
          correctIndex: 0,
        },
        {
          prompt: "My parents ___ me to a private school until I was 12.",
          answer: "sent",
          explanation: "Until I was 12 fecha o período → past simple.",
          options: ["sent", "have sent", "send", "were sending"],
          correctIndex: 0,
        },
        {
          prompt: "Patricia and I were having a really good discussion when Jason suddenly appeared, even though he ___ absolutely nothing about what we were talking about.",
          answer: "knew",
          explanation: "Estado no mesmo momento passado → past simple (não present perfect).",
          options: ["has known", "knew", "had known", "knows"],
          correctIndex: 1,
        },
        {
          prompt: "I had never ___ a working prison before, so when the opportunity came up I was really eager.",
          answer: "visited",
          explanation: "Had never + past participle → had never visited.",
          options: ["been visiting", "visited", "visit", "been visited"],
          correctIndex: 1,
        },
        {
          prompt: "Olivia was cycling to school when she ___ an old woman waiting to cross the road.",
          answer: "passed",
          explanation: "Evento principal da cena → past simple (was cycling é o fundo).",
          options: ["was passing", "passed", "has passed", "had passed"],
          correctIndex: 1,
        },
        {
          prompt: "Although there was no reason to doubt what Alex said, I ___ Rick to check.",
          answer: "rang",
          explanation: "Ação principal concluída no passado → past simple.",
          options: ["was ringing", "rang", "have rung", "had rung"],
          correctIndex: 1,
        },
      ],
    },
    {
      id: "reescritas",
      title: "3. Completions longas",
      body: [
        "Diálogos e frases dos exercícios F e H da Unit 3. Tente completar e só então confira o gabarito do livro.",
      ],
      exercises: [
        {
          prompt: "Complete: The ambulance ___ (leave) by the time the reporters ___ (get) to the scene of the accident.",
          answer: "had left ... got",
          explanation: "A ambulância saiu antes de os repórteres chegarem → past perfect + past simple.",
        },
        {
          prompt: "Complete: It ___ (be) only the second time I ___ (ever/be) in a helicopter.",
          answer: "was ... had ever been",
          explanation: "It was a segunda vez; a experiência anterior → had ever been.",
        },
        {
          prompt: "Complete: Luckily, I ___ (just/reach) the end of my essay when the teacher ___ (tell) us all to put our pens down.",
          answer: "had just reached ... told",
          explanation: "Chegar ao fim veio imediatamente antes de o professor falar → past perfect.",
        },
        {
          prompt: "Complete: We ___ (do) everything we had to do by five, so we ___ (decide) to go out for a coffee.",
          answer: "had done ... decided",
          explanation: "Tudo estava feito antes das cinco; a decisão veio depois → past perfect + past simple.",
        },
        {
          prompt: "Complete: I ___ (not/want) Mrs Thomas's young son to touch my ornaments because I ___ (just/clean) them.",
          answer: "didn't want ... had just cleaned",
          explanation: "O estado (didn't want) e a limpeza anterior (had just cleaned).",
        },
        {
          prompt: "Reescreva com 'would': We often went to the seaside with our grandparents as children.",
          answer: "Our grandparents would often take us to the seaside as children.",
          explanation: "Would + infinitivo para hábito passado: would often take.",
        },
        {
          prompt: "Use a palavra 'having': Every night for the past week I have had the same dream.",
          answer: "I have been having the same dream for a week now.",
          explanation: "Duração que continua até agora → present perfect continuous.",
        },
      ],
    },
  ],
}

lessonContents[pastTimePractice.id] = pastTimePractice
