export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  // assign buttonsConainer to a local variable ButtonsContainer
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
