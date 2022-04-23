import styles from './styles.scss';
import { PetCard } from '../../components/petCard/petCard';
import { pets } from '../../data/pet';

console.log(pets);

export function PetContainer() {
  return (
    <div className='pet-container'>
      <h2 className='head'>cats</h2>
      {pets.map((pet) => (
        <PetCard
          styles={{ backgroundImage: `url(${pet.img})`}}
          name={pet.name}
          descr={pet.descr}
        />
      ))}
    </div>
  );
}
