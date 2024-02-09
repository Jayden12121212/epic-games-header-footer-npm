import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const EpicGamesHeader: Story = {
  args: {
    hasIcon: true,
    iconDesktopURL: "https://media.graphassets.com/qiFQiyH6TiuMdOIA5yZJ",
    iconMobileURL: "https://media.graphassets.com/qiFQiyH6TiuMdOIA5yZJ",
    desktopIconWidth: "233",
    desktopIconHeight: "32",
    mobileIconWidth: "32",
    mobileIconHeight: "32",
    links: [
      {
        label: "Hello",
        path: "/",
      },
      {
        label: "News",
        path: "/news",
      },
      {
        label: "Games & Community",
        path: "/games-community",
        hasDropdown: true,
        dropdown: {
          title: "Our Products",
          hasDescription: true,
          description: "Check out our wide range of products.",
          links: [
            { label: "Product 1", path: "/products/1" },
            { label: "Product 2", path: "/products/2" },
          ],
        },
      },
    ],
    activePath: "/",
    onNavigate: (path: string) => {
      console.log(`Navigate to ${path}`);
    },
  },
};
