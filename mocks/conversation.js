const SENT = 'SENT';
const DELIVERED = 'DELIVERED';
const READ = 'READ';

const HOST = 0;
const OTHER = 1;

export const conversations = [
  {id: 0, name:'Clarice', lastSeen: 'online', messages: [
    {from: 0, message: 'Manchego feta emmental.', date: '11:00', info: READ},
    {from: 1, message: 'Airedale goat cheeseburger stinking bishop squirty cheese everyone loves brie squirty cheese.', date: '11:24'},
    {from: 1, message: 'Cheese on toast emmental the big cheese.', date: '11:24'},
    {from: 0, message: 'Ricotta boursin cheese strings.', date: '11:24', info: READ}],
  },
  {id: 1, name:'Janice', lastSeen: 'last seen today at 11:23', messages: [
    {from: 0, message: '...', date: '11:23', info: READ},
    {from: 1, message: 'Yes', date: '11:23'}]
  },
  {id: 2, name:'John Coffee', lastSeen: 'last seen 2 Aug 2016', messages: [
    {from: 0, message: 'Spoon, to go cup cream variety id americano. Macchiato coffee white pumpkin spice percolator at cream.', date: '20:12', info: SENT, date: 'Yesterday'}]
  },
  {id: 3, name:'Cat', lastSeen: 'last seen yesterday 20:00', messages: [
    {from: 0, message: 'Peer out window, chatter at birds, lure them to mouth rub face on owner, jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water burrow under covers.', date: '19:44', info: DELIVERED}
  ]},
  {id: 4, name:'Paul', lastSeen: 'last seen Friday at 22:22', messages: [
    {from: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '03/05/2017'}]
  },
  {id: 5, name:'Marie', lastSeen: 'last seen yesterday at 12:22', messages: [
    {from: 0, message: 'What\'s up, fizz-ellas. I think I might have someone who\'s going to circumvrent the law. Actually, that was a box of Oscar\'s legally obtained medical marijuana.', date: '11:11', info: READ, date: '01/05/2017'}]
  },
  {id: 6, name:'Cheese', lastSeen: 'last seen Monday at 12:10', messages: [
    {from: 0, message: 'Halvah tiramisu gummi bears candy canes chocolate. Sweet roll jelly-o lemon drops gummies. Oat cake chocolate cake icing caramels marshmallow cake icing gingerbread.', date: '12:32', info: READ},
    {from: 1, message: 'Chocolate cake candy canes chupa chups fruitcake topping chocolate bar. Gummi bears chocolate sugar plum gummi bears.', date: '01/05/2017'}]
  },
  {id: 7, name:'Arthur', lastSeen: 'last seen Tuesday at 03:23', messages: [
    {from: 0, message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.', info: READ, date: '22/09/2016'},
    {from: 1, message: 'Bring to the table win-win survival strategies to ensure proactive domination.', date: '22/03/2016'}]
  },
  {id: 8, name:'Zombie', lastSeen: 'last seen Thursday at 00:21', messages: [
    {from: 0, message: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.', date: '22/03/2016', info: READ},
    {from: 1, message: 'De carne lumbering animata corpora quaeritis.', date: '22/03/2016'}]
  },
]
