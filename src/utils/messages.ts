
export const wishTemplates = [
  {
    id: 1,
    text: "Every time I see you, my heart skips a beat. Would you be my Valentine?",
    category: "romantic",
  },
  {
    id: 2,
    text: "Your smile brightens my darkest days. Be mine this Valentine's?",
    category: "sweet",
  },
  {
    id: 3,
    text: "In a world full of people, my eyes always search for you. Happy Valentine's Day!",
    category: "romantic",
  },
  {
    id: 4,
    text: "You're the missing piece to my puzzle. Will you complete my Valentine's Day?",
    category: "cute",
  },
  {
    id: 5,
    text: "Just thinking about you makes my heart flutter. Be my Valentine?",
    category: "sweet",
  },
];

export const getRandomTemplate = () => {
  const randomIndex = Math.floor(Math.random() * wishTemplates.length);
  return wishTemplates[randomIndex];
};
