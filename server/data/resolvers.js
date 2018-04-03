const messages = [{
  id: 17,
  content: 'Hey, have you seen my cat?',
}, {
  id: 84,
  content: 'No, what does it look like?',
}];

const resolvers = {
  Query: {
    messages: () => {
      return messages;
    },
  },
};

export default resolvers;