import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { blackA } from "@radix-ui/colors";
import "../Meu resumo/style.css";

export const MeuResumo = () => {
	return (
		<>
			<AlertDialog.Root>
				<AlertDialog.Trigger asChild>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className="Button violet">Meu resumo</button>
				</AlertDialog.Trigger>
				<AlertDialog.Portal>
					<AlertDialog.Overlay className="AlertDialogOverlay" />
					<AlertDialog.Content className="AlertDialogContent">
						<AlertDialog.Title className="AlertDialogTitle">
							Sobre mim
						</AlertDialog.Title>
						<AlertDialog.Description className="AlertDialogDescription">
							😁 Opa, meu nome é Diogo e sou Desenvolvedor Frontend fazem 3
							anos, atualmente venho prestando serviços tanto{" "}
							<span style={{ color: blackA.blackA9 }}>Frontend</span> como
							<span style={{ color: blackA.blackA9 }}> Backend</span>, venho
							dando continuidade em meus estudos na área e buscando evoluir cada
							vez mais
						</AlertDialog.Description>
						<div
							style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}
						>
							<AlertDialog.Action asChild>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<button className="Button red">Sair</button>
							</AlertDialog.Action>
						</div>
					</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>
		</>
	);
};
