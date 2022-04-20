import { Bio } from '../biography/bio'
import './style.scss'

export function Container() {
  const [bio, setBio] = useState([
    {
      name: 'William Shakespeare',
      country: 'England',
      city: 'Stratford-upon-Avon',
      born: '26 april 1564',
      died: '23 April 1616 (aged 52)',
      spouses: {
        spouse: 'Anne Hathaway',
      },
      children: {
        child: 'Susanna Hall',
        child: 'Hamnet Shakespeare',
        child: 'Judith Quiney',
      },
    },
  ])

  return (
    <div className='container'>
      <Bio />
    </div>
  )
}
