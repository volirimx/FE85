import { CardDesctop } from "../CardDesctop/CardDesctope";
import { CardMobile } from "../CardMobile/CardMobile";
import { CardTablet } from "../CardTablet/CardTablet";
import { IDataProps } from "../types";
import styles from "./Card.module.css"

export const Cards = ({ card }: IDataProps) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CardDesctop id={card[0].id} image={card[0].image} text={card[0].text} date={card[0].date} title={card[0].title} description={card[0].description} author={card[0].author} />
        <div className={styles.tablet}>
          <CardTablet id={card[1].id} image={card[1].image} text={card[1].text} date={card[1].date} title={card[1].title} description={card[1].description} author={card[1].author}/>
          <CardTablet id={card[1].id} image={card[1].image} text={card[1].text} date={card[1].date} title={card[1].title} description={card[1].description} author={card[1].author}/>
        </div>
      </div>
      <div className={styles.mobile}>
        <CardMobile id={card[2].id} image={card[2].image} text={card[2].text} date={card[2].date} title={card[2].title} description={card[2].description} author={card[2].author} />
        <CardMobile id={card[2].id} image={card[2].image} text={card[2].text} date={card[2].date} title={card[2].title} description={card[2].description} author={card[2].author} />
        <CardMobile id={card[2].id} image={card[2].image} text={card[2].text} date={card[2].date} title={card[2].title} description={card[2].description} author={card[2].author} />
        <CardMobile id={card[2].id} image={card[2].image} text={card[2].text} date={card[2].date} title={card[2].title} description={card[2].description} author={card[2].author} />
      </div>
    </div>
  )
};