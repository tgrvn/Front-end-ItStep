import styles from './style.scss';

export function PetCard(props) {
  const { styles, name, descr } = props;
  return (
    <>
      <div className='pet-card' style={styles}>
        <div className='pet-info'>
          <h2>{name}</h2>
          <p>{descr}</p>
        </div>
      </div>
    </>
  );
}
