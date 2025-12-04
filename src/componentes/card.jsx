import s from './card.module.css'

// export const Card = (props) => {
//     return(
//         <>
//         <h2>{props.name}</h2>
//         <img src={props.image} alt={props.name} />
//          <p>{props.species}</p>
//         </>
//     )
// }


export const Card = ({image, name, films}) => {
    return(
        <div className={s.cardBackground}>
        <img className={s.cardImage} src={image} alt={name} />
        <h2 className={s.carTitle}>{name}</h2>
       {films.length > 0 ? <p className={s.cardText}>{films}</p> : <p>Nao tem filmes</p>}
        </div>
    )
}