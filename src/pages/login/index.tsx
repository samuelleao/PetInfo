import type { NextPage } from "next";
import Image from "next/image";
import { Box, Container, Flex, Form } from "src/styles/stitches.config";
import { InputGroup } from "src/components/Input";
import { Text } from "src/styles/texts";
import { Button } from "src/styles/button";

const Login: NextPage = () => {
  return (
    <main>
      <Container
        css={{
          "@tablet": {
            padding: "4rem 1rem",
          },
        }}
      >
        <Flex
          css={{
            minHeight: "100vh",
            justifyContent: "space-between",
            "@tablet": {
              flexDirection: "column",
            },
          }}
        >
          <Flex
            css={{
              width: "50%",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.5rem",
              "@tablet": {
                width: "100%",
              },
            }}
          >
            <Text size="1" weight="semibold">
              Petinfo
            </Text>
            <Text weight="semibold" size="1" css={{ color: "$gray100" }}>
              <Box as="span" css={{ color: "$brand100" }}>
                Amor
              </Box>{" "}
              e{" "}
              <Box as="span" css={{ color: "$brand100" }}>
                Carinho
              </Box>{" "}
              por meio do conhecimento
            </Text>
            <Text weight="regular" size="4" css={{ color: "$gray300" }}>
              Todas as informações para melhorar a vida do seu pet em um só
              lugar
            </Text>
            <Image src="/login-img.jpg" width={297} height={209} />
          </Flex>
          <Form
            css={{
              width: "45%",
              "@tablet": {
                width: "100%",
              },
              marginTop: "4rem",
            }}
          >
            <Text weight="semibold" size="3">
              Login
            </Text>
            <InputGroup
              type="text"
              name="user"
              label="Usuário"
              placeholder="Digite seu usuário"
            />
            <InputGroup
              type="password"
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
            />
            <Button css={{ width: "100%" }}>Acessar</Button>
            <Text
              css={{ textAlign: "center", width: "100%", color: "$gray100" }}
              size="5"
              weight="semibold"
            >
              Ainda não possui conta?
            </Text>
            <Text
              css={{ textAlign: "center", width: "100%", color: "$gray300" }}
              size="5"
              weight="regular"
            >
              Clicando no botão abaixo, você pode se cadastrar rapidamente
            </Text>
            <Button css={{ width: "100%" }} outline>
              Cadastrar
            </Button>
          </Form>
        </Flex>
      </Container>
    </main>
  );
};

export default Login;
