import Container from "./components/Container";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <MainLayout />
      </Container>
    </>
  );
}

export default App;
