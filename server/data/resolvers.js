const users = [{
  id: 1,
  displayName: 'Batman',
}, {
  id: 3,
  content: 'Joker',
}];

const messages = [{
  id: 2,
  content: 'Hey, have you seen my burrito?',
  createdBy: users[0],
  createdAt: new Date()
}, {
  id: 4,
  content: 'No, what does it look like?',
  createdBy: users[1],
  createdAt: new Date()
}];

const resolvers = {
  Query: {
    messages: () => {
      return messages;
    },
    users: () => {
      return users;
    },
  },
};

export default resolvers;