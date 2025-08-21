import SharedBadge from '../shared/SharedBadge';

type BadgeProductType = {
 type:"training" | "workshop" | "webinar" | "open" | "closed" | "warning" | "paid" | "free",
 text?: string
}

const BadgeProduct = ({ type, text }: BadgeProductType) => {
  switch (type) {
      case "training":
         return <SharedBadge backgroundColor={"#575757"} text="Pelatihan" />    
      case "workshop":
         return <SharedBadge backgroundColor={"#28BACA"} text="Workshop" />    
      case "webinar":
         return <SharedBadge backgroundColor={"#8C73E9"} text="Webinar" />    
      case "open":
         return <SharedBadge backgroundColor={"#8FC640"} text="Pendaftaran Dibuka" />    
      case "closed":
         return <SharedBadge backgroundColor={"#AF3E3E"} text="Pendaftaran Ditutup" />    
      case "warning":
         return <SharedBadge backgroundColor={"#E38C40"} text={text || "12 Hari Lagi"} />    
      case "paid":
         return <SharedBadge className={"paid-badge"} text={"Berbayar"} />    
      case "free":
         return <SharedBadge className={"free-badge"} text={"Gratis"} />    
      default:
         return <SharedBadge color={"#575757"} text="${type}" />    
  }
}

export default BadgeProduct