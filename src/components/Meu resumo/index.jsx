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
         texto...
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
