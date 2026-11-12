import { lessonContents, type LessonContent } from "@/content"

const secondConditional: LessonContent = {
  id: "second-conditional",
  intro:
    "O second conditional fala de situações hipotéticas no presente ou no futuro — coisas imaginárias, improváveis ou conselhos. Conteúdo baseado na Unit 11 (Conditionals) do livro Destination C1–C2.",
  sections: [
    {
      id: "forma-basica",
      title: "1. A forma básica",
      body: [
        "Estrutura: if + past simple (ou past continuous) na condição, would + infinitivo no resultado. O resultado descreve a consequência imaginária no presente ou no futuro.",
        "Na escrita, would quase sempre aparece contraído: I'd, you'd, he'd, she'd, we'd, they'd. Quando a oração com if vem primeiro, usamos vírgula separando as duas partes; quando o resultado vem primeiro, sem vírgula.",
      ],
      examples: [
        {
          en: "What would the local government do if there was an earthquake in the area?",
          pt: "O que o governo local faria se houvesse um terremoto na região?",
          note: "Exemplo do livro: condição improvável + consequência imaginária.",
        },
        {
          en: "If I was/were a gambler, I'd put money on Jim being late.",
          pt: "Se eu fosse jogador, apostaria que o Jim vai se atrasar.",
          note: "I'd = I would. Was/were: ambos possíveis no inglês britânico.",
        },
      ],
      exercises: [
        {
          prompt: "Complete: If I ___ (have) more time, I ___ (learn) French.",
          answer: "If I had more time, I'd learn French.",
          explanation: "Passado (had) na condição, would + infinitivo no resultado; I'd = I would.",
        },
        {
          prompt: "Reescreva com a contração: If you studied harder, you would pass.",
          answer: "If you studied harder, you'd pass.",
          explanation: "You would vira you'd; a estrutura da frase não muda.",
        },
      ],
    },
    {
      id: "usos",
      title: "2. Quando usar",
      body: [
        "Situações hipotéticas no presente ou futuro: algo que não é verdade agora, mas imaginamos como seria.",
        "Conselhos com If I were you: a forma clássica de dar conselho em inglês. Sonhos e desejos: falar do que faríamos em uma vida imaginária.",
      ],
      examples: [
        {
          en: "Do you think it would reduce pollution if the government were to introduce a new tax on petrol?",
          pt: "Você acha que reduziria a poluição se o governo criasse um novo imposto sobre a gasolina?",
          note: "Situação hipotética no presente.",
        },
        {
          en: "If I were you, I would accept the job.",
          pt: "Se eu fosse você, aceitaria o emprego.",
          note: "If I were you é a forma fixa para conselhos (sempre were).",
        },
        {
          en: "If I won the lottery, I'd travel the world.",
          pt: "Se eu ganhasse na loteria, viajaria pelo mundo.",
          note: "Sonho/desejo: condição improvável + resultado imaginado.",
        },
      ],
      exercises: [
        {
          prompt: "Dê o conselho com If I were you: You should see a doctor.",
          answer: "If I were you, I'd see a doctor.",
          explanation: "Conselhos usam a forma fixa If I were you + would.",
        },
        {
          prompt: "Complete o desejo: If I ___ (live) near the beach, I ___ (surf) every day.",
          answer: "If I lived near the beach, I'd surf every day.",
          explanation: "Desejo hipotético: passado na condição, would no resultado.",
        },
      ],
    },
    {
      id: "variacoes",
      title: "3. Variações avançadas",
      body: [
        "Was/were: no inglês britânico, was e were são aceitos após if (were é mais formal); no americano, usa-se were. Com If I were you, o were é obrigatório nas duas variedades.",
        "Outros modais podem substituir o would no resultado: might e could. Unless equivale a if... not e também combina com o second conditional.",
      ],
      examples: [
        {
          en: "If the weather was better, we could have a picnic.",
          pt: "Se o tempo estivesse melhor, poderíamos fazer um piquenique.",
          note: "Could no lugar de would: possibilidade em vez de certeza.",
        },
        {
          en: "Unless governments act now, the environment is really going to suffer.",
          pt: "A menos que os governos ajam agora, o meio ambiente vai sofrer muito.",
          note: "Unless = if... not. Com passado (unless it rained...), o resultado vai para would.",
        },
      ],
      exercises: [
        {
          prompt: "Reescreva com could: If the weather was better, we would have a picnic.",
          answer: "If the weather was better, we could have a picnic.",
          explanation: "Could no lugar de would indica possibilidade; é o exemplo do livro.",
        },
        {
          prompt: "Reescreva com unless: If governments do not act now, the environment will suffer.",
          answer: "Unless governments act now, the environment will suffer.",
          explanation: "Unless = if... not, então o verbo volta à forma afirmativa (act).",
        },
      ],
    },
    {
      id: "mistos-inversao",
      title: "4. Conditionals mistos e inversão formal",
      body: [
        "Mistos: a condição e o resultado podem estar em tempos diferentes. Passado → presente: algo que aconteceu (ou não) no passado afeta o presente. Presente → passado: uma condição atual explica um resultado passado.",
        "Inversão formal: em estilo formal, o if pode sumir com Were + sujeito + to + infinitivo, com o mesmo sentido de If we stopped....",
      ],
      examples: [
        {
          en: "You might not be in so much trouble if you hadn't started gambling.",
          pt: "Você talvez não estivesse em tantos problemas se não tivesse começado a jogar.",
          note: "Condição no passado (past perfect), resultado no presente.",
        },
        {
          en: "If I were you, I would have made Paula buy her own lottery ticket.",
          pt: "Se eu fosse você, teria feito a Paula comprar o próprio bilhete de loteria.",
          note: "Condição no presente, resultado no passado.",
        },
        {
          en: "Were we to stop using fossil fuels tomorrow, it would still take decades for the planet to recover.",
          pt: "Mesmo que parássemos de usar combustíveis fósseis amanhã, o planeta ainda levaria décadas para se recuperar.",
          note: "Forma formal = If we were to stop... / If we stopped....",
        },
      ],
      exercises: [
        {
          prompt: "Misto ou comum? You might not be in so much trouble if you hadn't started gambling.",
          answer: "Misto: condição no passado (past perfect), resultado no presente.",
          explanation: "O passado explica o presente — a marca dos mixed conditionals.",
        },
        {
          prompt: "Reescreva na forma formal: If we stopped using fossil fuels tomorrow, it would still take decades.",
          answer: "Were we to stop using fossil fuels tomorrow, it would still take decades.",
          explanation: "Were + sujeito + to + infinitivo; o if desaparece.",
        },
      ],
    },
    {
      id: "estruturas-alternativas",
      title: "5. Estruturas alternativas",
      body: [
        "O inglês tem várias formas de dizer 'se' além do if, muito comuns em textos formais e no C1/C2. Com sentido de second conditional, o verbo depois dessas estruturas vai para o passado, igual ao if.",
      ],
      examples: [
        {
          en: "Supposing the price of oil tripled tomorrow, what do you think would happen?",
          pt: "Supondo que o preço do petróleo triplicasse amanhã, o que você acha que aconteceria?",
        },
        {
          en: "I think I'd be quite lonely if it wasn't/weren't for my dog, Buster.",
          pt: "Acho que eu seria bem solitário se não fosse pelo meu cachorro, o Buster.",
        },
        {
          en: "But for your help, I wouldn't have been able to quit gambling.",
          pt: "Se não fosse pela sua ajuda, eu não teria conseguido parar de jogar.",
        },
        {
          en: "If you happened to see someone drop litter in the street, what would you do?",
          pt: "Se por acaso você visse alguém jogando lixo na rua, o que faria?",
        },
      ],
      exercises: [
        {
          prompt: "Complete com a estrutura do livro: ___ the price of oil tripled tomorrow, what would happen?",
          answer: "Supposing the price of oil tripled tomorrow, what would happen?",
          explanation: "Supposing + passado funciona como o if do second conditional.",
        },
        {
          prompt: "Reescreva com if it weren't for: But for your help, I wouldn't be here.",
          answer: "I wouldn't be here if it weren't for your help.",
          explanation: "But for + substantivo equivale a if it weren't for + substantivo.",
        },
      ],
    },
    {
      id: "first-vs-second",
      title: "6. First vs. second conditional",
      body: [
        "First conditional: condição real/possível no presente ou futuro (if + present, will + infinitivo). Second conditional: condição hipotética (if + passado, would + infinitivo). Comparar os dois lado a lado elimina a confusão mais comum.",
      ],
      examples: [
        {
          en: "If we continue to pollute our planet, future generations will suffer.",
          pt: "Se continuarmos a poluir o planeta, as gerações futuras sofrerão.",
          note: "First: ameaça real e possível.",
        },
        {
          en: "What would the local government do if there was an earthquake in the area?",
          pt: "O que o governo local faria se houvesse um terremoto na região?",
          note: "Second: cenário imaginado.",
        },
        {
          en: "If the people from Greenpeace call, tell them I'll call them back later.",
          pt: "Se o pessoal do Greenpeace ligar, diga que retorno a ligação depois.",
          note: "First com imperativo: instrução condicional real.",
        },
      ],
      exercises: [
        {
          prompt: "First ou second? If we continue to pollute our planet, future generations will suffer.",
          answer: "First conditional: ameaça real e possível.",
          explanation: "Presente (continue) + will indica first conditional.",
        },
        {
          prompt: "First ou second? What would you do if there was an earthquake?",
          answer: "Second conditional: cenário imaginado.",
          explanation: "Passado (was) + would indica second conditional.",
        },
      ],
    },
  ],
}

lessonContents[secondConditional.id] = secondConditional
