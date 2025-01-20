import { Card, Text } from "@mantine/core";
import { ReactNode } from "react";

export function FeaturesCard({ description, icon, title }: { title: string; description: ReactNode; icon?: string }) {
  return (
    <Card withBorder shadow={"xl"} radius="lg" p={20}>
      <Text weight={"bold"} size={20}>
        {title}
      </Text>
      <Text>{description}</Text>
    </Card>
  );
}
