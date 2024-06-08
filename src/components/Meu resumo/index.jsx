import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../Meu resumo/style.css';

export const MeuResumo = () => {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="Button violet">Meu resumo</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">Sobre mim</AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              Olá, meu nome é Diogo e sou Desenvolvedor Fullstack. Desde menor de idade, sempre fui apaixonado por criar coisas,
              mas não sabia nada sobre esse mundo da programação. Porém, em 2018 descobri a existência dele através de um amigo,
              Comecei meus estudos na programação no ano de 2022, e fui estudando o frontend desde a base até o framework, venho
              me empenhando bastante na área principalmente com o framework React, venho focando no desenvolvimento de projetos frontend para poder ter um foco maior em uma stack,
              tenho 2 anos de experiência na área de desenvolvimento web e nesse tempo venho me empenhando bastante
              para poder cumprir com as exigências do mercado além de ser totalmente apaixonado pela programação, fique à vontade para ver meus projetos
              e conhecer meu trabalho
            </AlertDialog.Description>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
              <AlertDialog.Action asChild>
                <button className="Button red">Sair</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}
