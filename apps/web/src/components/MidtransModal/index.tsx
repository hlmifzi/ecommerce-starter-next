
import Link from 'next/link';
import Image from 'next/image';
import dynamic from "next/dynamic";
import SharedButton from "@/components/shared/SharedButton";

const SharedModal = dynamic(() => import("@/components/shared/SharedModal"), {
  ssr: false, 
});

import styles from './midtransModal.module.scss';


const MidtransModal = ({
	openPayment,
	handleMidtransModal
}:any) => {

  return (   
		<SharedModal 
			open={openPayment}
			classNameContainer={styles.midtransModalContainer}
			handleDialog={handleMidtransModal}
			title={"Pembayaran Online Midtrans"}
			action={
				<div className={styles.actionDialog}>
					<Link href={"/status-pembayaran"}>
						<SharedButton type="primary">
							Selesai Pembayaran
						</SharedButton>
					</Link>
				</div>
			}
		>
			<div className={styles.midtransDummyContainer}>
				<Image 
					src="/payment/midtrans-dummy.png" 
					fill 
					alt="midtrans"
					style={{ objectFit: "contain" }}
				/>
			</div>
		</SharedModal>
  )
}

export default MidtransModal