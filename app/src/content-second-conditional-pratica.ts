import { lessonContents, type LessonContent } from "@/content"

const secondConditionalPractice: LessonContent = {
  id: "second-conditional-pratica",
  intro:
    "Treino pesado de second conditional com correção imediata: aquecimento, quiz de múltipla escolha e reescritas. Conteúdo baseado nos exercícios G, H e J da Unit 11 (Conditionals) do livro Destination C1–C2.",
  sections: [
    {
      id: "aquecimento",
      title: "1. Aquecimento",
      body: [
        "Digite a resposta e clique em Verificar (ou aperte Enter). Vale maiúscula ou minúscula, com ou sem ponto final — o que conta é a estrutura.",
      ],
      exercises: [
        {
          prompt: "Complete com unless: ___ governments act now, the environment will suffer.",
          answer: "Unless governments act now, the environment will suffer.",
          explanation: "Unless = if... not, então o verbo volta à forma afirmativa (act).",
          acceptedAnswers: [
            "Unless governments act now, the environment will suffer.",
          ],
        },
        {
          prompt: "Complete: If I ___ (be) you, I ___ (accept) the job.",
          answer: "If I were you, I'd accept the job.",
          explanation: "Conselhos usam a forma fixa If I were you + would ('d = would).",
          acceptedAnswers: [
            "If I were you, I'd accept the job.",
            "If I were you, I would accept the job.",
          ],
        },
        {
          prompt: "Complete a inversão: ___ we to apply now, there's a good chance we would get the job.",
          answer: "Were we to apply now, there's a good chance we would get the job.",
          explanation: "Were + sujeito + to + infinitivo; o if desaparece.",
          acceptedAnswers: [
            "Were we to apply now, there's a good chance we would get the job.",
          ],
        },
        {
          prompt: "Complete: Supposing the price of oil ___ (triple) tomorrow, what ___ (happen)?",
          answer: "Supposing the price of oil tripled tomorrow, what would happen?",
          explanation: "Supposing + passado funciona como o if do second conditional.",
          acceptedAnswers: [
            "Supposing the price of oil tripled tomorrow, what would happen?",
            "Supposing the price of oil tripled tomorrow, what do you think would happen?",
          ],
        },
        {
          prompt: "Complete com should: If there ___ (be) any reason for late delivery, please inform us.",
          answer: "If there should be any reason for late delivery, please inform us.",
          explanation: "If + should = forma formal de condição possível (ver tabela: if... should).",
          acceptedAnswers: [
            "If there should be any reason for late delivery, please inform us.",
          ],
        },
      ],
    },
    {
      id: "quiz",
      title: "2. Quiz — escolha a opção",
      body: [
        "Clique na opção correta. Baseado no exercício H da Unit 11: todos os itens testam second conditional, mistos e estruturas alternativas.",
      ],
      exercises: [
        {
          prompt: "If you saw another student cheating in an exam, ___ you tell somebody?",
          answer: "would you tell",
          explanation: "Situação hipotética → second conditional: passado + would.",
          options: ["did you tell", "do you tell", "would you tell", "have you told"],
          correctIndex: 2,
        },
        {
          prompt: "Make sure you mix the ingredients well, ___ you might get lumps in your cake.",
          answer: "otherwise",
          explanation: "Otherwise = se não fizer isso; é o aviso após imperativo.",
          options: ["unless", "otherwise", "provided", "supposing"],
          correctIndex: 1,
        },
        {
          prompt: "___ my dad, I would never have started playing tennis in the first place.",
          answer: "Were it not for",
          explanation: "'Were it not for' = se não fosse por. 'Had it not been for' exigiria would have.",
          options: ["Were it for", "Had it not been for", "Were it to be for", "Were it not for"],
          correctIndex: 3,
        },
        {
          prompt: "If you ___ hear from Nigel, tell him I was asking after him.",
          answer: "should happen to",
          explanation: "Forma formal da tabela: if... (should) happen to + infinitivo.",
          options: ["happened", "should happen to", "should to", "will happen to"],
          correctIndex: 1,
        },
        {
          prompt: "The book would have been perfect ___ the ending.",
          answer: "had it not been for",
          explanation: "Inversão formal no lugar de 'if it hadn't been for'.",
          options: ["had it not been for", "it had not been for", "it hadn't been for", "hadn't it been for"],
          correctIndex: 0,
        },
        {
          prompt: "If you hadn't taken the money, you ___ in prison now.",
          answer: "wouldn't be",
          explanation: "Misto: condição no passado (past perfect), resultado no presente (would + base).",
          options: ["wouldn't have been", "hadn't been", "haven't been", "wouldn't be"],
          correctIndex: 3,
        },
        {
          prompt: "Do you think that if we ___ earlier we might not have missed the coach?",
          answer: "had left",
          explanation: "Past perfect na condição: ação anterior ao resultado passado.",
          options: ["have been leaving", "left", "had left", "have left"],
          correctIndex: 2,
        },
        {
          prompt: "Unless Ray ___ here soon, I'm going to leave because I'm getting bored.",
          answer: "gets",
          explanation: "Depois de unless, o verbo vai para o presente afirmativo (unless = if... not).",
          options: ["doesn't get", "gets", "won't get", "will get"],
          correctIndex: 1,
        },
        {
          prompt: "What if ___ you that there's a good chance I can get tickets for the concert?",
          answer: "were to tell",
          explanation: "'What if I were to tell you' = e se eu te dissesse (forma formal).",
          options: ["were to tell", "were telling", "have told", "would to tell"],
          correctIndex: 0,
        },
        {
          prompt: "If there ___ happen to be any reason for late delivery, please inform our Accounts Department.",
          answer: "should",
          explanation: "If + should + happen to = condição formal possível.",
          options: ["might", "could", "would", "should"],
          correctIndex: 3,
        },
      ],
    },
    {
      id: "reescritas",
      title: "3. Reescritas com palavra dada",
      body: [
        "Reescrevas longas dos exercícios G e J da Unit 11. Tente montar a frase completa e só então confira o gabarito do livro.",
      ],
      exercises: [
        {
          prompt: "Reescreva começando com 'We wouldn't have': The only reason we won the contract was Debbie's fantastic presentation.",
          answer: "We wouldn't have won the contract if it hadn't been for Debbie's fantastic presentation.",
          explanation: "Condição no passado + resultado passado: third conditional com if it hadn't been for.",
        },
        {
          prompt: "Reescreva com 'If it hadn't been for': The eventual arrival of the ferry prevented a fight from breaking out amongst the passengers.",
          answer: "If it hadn't been for the eventual arrival of the ferry, a fight would have broken out amongst the passengers.",
          explanation: "'Prevented' vira condição negativa + would have no resultado.",
        },
        {
          prompt: "Reescreva com 'Had it not been for': None of the passengers was injured because of the driver's quick reaction.",
          answer: "Had it not been for the driver's quick reaction, some passengers would have been injured.",
          explanation: "Inversão formal: o if some e o sujeito inverte com o had.",
        },
        {
          prompt: "Reescreva com 'Unless': We'll have to cancel the meeting if Wendy doesn't turn up soon.",
          answer: "Unless Wendy turns up soon, we'll have to cancel the meeting.",
          explanation: "Unless = if... not: o verbo volta à afirmativa (turns up).",
        },
        {
          prompt: "Reescreva com 'Were it': Mr Jones would be quite lonely if he didn't have his daughter's visits.",
          answer: "Were it not for his daughter's visits, Mr Jones would be quite lonely.",
          explanation: "'Were it not for' = se não fosse por (presente hipotético).",
        },
        {
          prompt: "Reescreva com 'in case': Here's my phone number, because you might need it.",
          answer: "Here's my phone number in case you need it.",
          explanation: "In case + presente: precaução para algo possível.",
        },
        {
          prompt: "Reescreva com 'Providing': Agree to be back by midnight and you can go.",
          answer: "Providing (that) you agree to be back by midnight, you can go.",
          explanation: "Providing (that) = somente se; o imperativo vira condição.",
        },
        {
          prompt: "Reescreva com 'Had it': Officer Hughes prevented the robbers from escaping.",
          answer: "Had it not been for Officer Hughes, the robbers would have escaped.",
          explanation: "'Prevented' + inversão formal com resultado em would have.",
        },
        {
          prompt: "Use a palavra 'it': Without this new diet, Henry would never have lost so much weight.",
          answer: "Had it not been for this new diet, Henry would never have lost so much weight.",
          explanation: "Gabarito do livro: inversão com 'it' no lugar de 'without'.",
        },
        {
          prompt: "Use a palavra 'no': Unless the plans change, we'll see you on the 19th.",
          answer: "Provided there are no changes to the plans, we'll see you on the 19th.",
          explanation: "Gabarito do livro: provided + there are no changes (8 palavras).",
        },
        {
          prompt: "Use a palavra 'apply': If you applied now, there's a good chance you would get the job.",
          answer: "Were you to apply now, there's a good chance you would get the job.",
          explanation: "Gabarito do livro: inversão formal were you to + infinitivo.",
        },
        {
          prompt: "Use a palavra 'have': I didn't know about your problem so I didn't offer to help.",
          answer: "If I'd known about your problem, I would have offered to help.",
          explanation: "Terceira condicional: past perfect + would have (o 'have' aparece nos dois lados).",
        },
        {
          prompt: "Use a palavra 'in': It could get cold at night, so take some warm clothes.",
          answer: "Take some warm clothes in case it gets cold at night.",
          explanation: "Gabarito do livro: in case + presente para precaução.",
        },
        {
          prompt: "Use a palavra 'having': I'd love to travel the world if I didn't have to pay off my mortgage.",
          answer: "Were it not for having to pay off my mortgage, I'd love to travel the world.",
          explanation: "Gabarito do livro: were it not for + -ing.",
        },
        {
          prompt: "Use a palavra 'seen': Ten years ago, people would have complained at seeing this film.",
          answer: "Had people seen this film ten years ago, they would have complained.",
          explanation: "Gabarito do livro: inversão com past perfect.",
        },
        {
          prompt: "Use a palavra 'condition': Drivers are allowed to park here if they display a local resident permit.",
          answer: "Drivers are allowed to park here on condition that they display a local resident permit.",
          explanation: "Gabarito do livro: on condition that + presente (regra real).",
        },
      ],
    },
  ],
}

lessonContents[secondConditionalPractice.id] = secondConditionalPractice
