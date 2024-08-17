str="My name is Neeraja Turupati"
str.split(' ')[0].split(' ')
//['My']

str="My name is Neeraja Turupati"
str.split(' ')[0].split('')
// ['M', 'y']

str="My name is Neeraja Turupati"
str.split(' ')[0].split('').join('')
//'My'


//REVERSE A STRING:

str="My name is Neeraja Turupati"

str.split(' ')[0].split('').reverse().join('')+" "+
str.split(' ')[1].split('').reverse().join('')+" "+
str.split(' ')[2].split('').reverse().join('')+" "+
str.split(' ')[3].split('').reverse().join('')+" "+
str.split(' ')[4].split('').reverse().join('')
OUTPUT: 'yM eman si ajareeN itapuruT'

str.split(' ').reverse().join('')
OUTPUT: 'TurupatiNeerajaisnameMy'

str.split(' ').reverse().join(' ')
OUTPUT: 'Turupati Neeraja is name My'

str.split('').reverse().join(' ')
OUTPUT: 'i t a p u r u T a j a r e e N s i e m a n y M'

str.split('').reverse().join('')
OUTPUT: 'itapuruT ajareeN si eman yM'