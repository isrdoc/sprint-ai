import { Button, ButtonProps } from "@mantine/core";

// Extend ButtonProps to allow onClick and other button props
export function PrimaryButton(props: ButtonProps & { onClick?: () => void }) {
  return <Button color="grape" variant="filled" {...props} />;
}
