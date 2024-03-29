/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- - DATA ARR */
const quotes = [
  {
    quote: 'If you Change the way you look at things, the things you look at change.',
    source: 'Wayne Dyer',
    citation: 'Good Housekeeping',
    year: '2023',
    tag: 'Inspirational'
  },
  {
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    source: 'Dolly Parton',
    citation: 'Parade',
    year: '2023',
    tag: 'Music'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    source: 'Albert Einstein'
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    source: 'William James'
  },
  {
    quote: 'Learn the rules like a pro, so you can break them like an artist.',
    source: 'Pablo Picasso'
  },
  {
    quote: 'I never lose. I either win or learn.',
    source: 'Nelson Mandela',
    citation: 'Parade'
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: 'Mark Twain'
  },
  {
    quote: "You can cut all the flowers, but you cannot keep spring from coming.",
    source: 'Pablo Neruda'
  },
  {
    quote: "Think before you speak. Read before you think.",
    source: 'Fran Lebowitz'
  },
  {
    quote: "Music is the strongest form of magic.",
    source: 'Marilyn Manson'
  },
  {
    quote: "Without music, life would be a mistake.",
    source: 'Friedrich Nietzsche'
  },
  {
    quote: "Music washes away from the soul the dust of everyday life.",
    source: 'Berthold Auerback'
  },
  {
    quote: "Only do what your hear tells you.",
    source: 'Princess Diana'
  },
  {
    quote: "Living is the art of getting used to what we didn't expect.",
    source: 'Eleanor C. Wood'
  },
  {
    quote: "Be so good they can't ignore you.",
    source: 'Steve Martin'
  },

  {
    quote: "It is never too late to be who you might have been.",
    source: 'George Elliot'
  },
  {
    quote: "If your dreams don't scare you, they are too small.",
    source: 'Richard Branson'
  },
  {
    quote: "We won't be distracted by comparison if we're captivated with purpose.",
    source: 'Bob Goff'
  },
  {
    quote: "A smooth sea never made a skilled sailor.",
    source: 'Franklin D. Roosevelt'
  },
  {
    quote: "Just start. Don't worry that you don't have all the answers yet.",
    source: 'Alli Webb'
  },
  {
    quote: "Nature is not a place to visit, it is home.",
    source: 'Gary Snyder'
  },
  {
    quote: "Change is inevitable. Growth is optional.",
    source: 'John C. Maxwell'
  },
  {
    quote: "By failing to prepare, you are preparing to fail.",
    source: 'Benjamin Franklin'
  },
  {
    quote: "The best way to make your dreams come true is to wake up.",
    source: 'Paul Valery'
  },
  {
    quote: "If not me, who? If not now, when?",
    source: 'Emma Watson'
  },
  {
    quote: "Am I good enough? Yes, I am.",
    source: 'Michelle Obama'
  },
  {
    quote: "Beauty begins the moment you decide to be yourself.",
    source: 'Coco Chanel'
  },
  {
    quote: "Flowers grow back even after the harshest winters. You will, too.",
    source: 'Jennae Cecelia'
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: 'Eleanor Roosevelt'
  },
  {
    quote: "Do not allow people to dim your shine because they are blinded.",
    source: 'Lady Gaga'
  },
  {
    quote: "Our unity is our strength and diversity is our power.",
    source: 'Kamala Harris'
  },
]

/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---- DATA MAINTENANCE */
// TESTING ON FOR ARR LENGTH, DUPLICATES, AND CHARACTER LIMITS
function dataTests(list, item=null, len=null) {
  // number of items in array
  function numOfItems() { console.log('AMOUNT OF OBJECTS', list.length) };
  numOfItems()
  // isolate specific property of multi-dimensional arrays
  function getEl(complex, simple) { let element; if (item === null) { element = simple } else { element = complex} return element.toLowerCase() }
  // find duplicates
  function findDuplicates() {
    let duplicates = [];  let allItems = [];
    list.forEach( (obj) => { let element = getEl( eval(`obj.${item}`), obj ); allItems.push(element) } );
    for(let i = 0; i < list.length; i++) {
      let dupeCount = 0; let element = getEl( eval( `list[${i}].${item}` ), list[i] );
      allItems.forEach( (obj) => { if (obj === element) { dupeCount++; if (dupeCount > 1) { duplicates.push(obj) } } } ) ;
    };
    duplicates.length > 0 ? console.log('DUPLICATES:', duplicates) : console.log('NO DUPLICATES!');
  }
  findDuplicates()
  // find any items that exceed character limit
  function findTooLong() {
    if (len != null) {
      let tooLong = [];
      list.forEach( (obj) => { let element = getEl( eval(`obj.${item}`), obj ); if (element.length > len) { tooLong.push(element) } } );
      tooLong.length > 0 ? console.log('EXCEEDS CHARACTER LIMIT:', tooLong) : console.log('ALL ITEMS MEET LENGTH REQUIREMENTS!');
    }
  }
  findTooLong()
}
// COMMENT CODE IN/OUT TO ENABLE/DISABLE TEST
// dataTests(quotes, `quote`, 75);

