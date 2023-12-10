import { TRocket } from "../../../types";
import ActionButton from "../../atoms/Buttons/ActionButton/ActionButton";
import IconButton from "../../atoms/Buttons/IconButton/IconButton";

import {
  Item,
  Image,
  Title,
  Text,
  Content,
  ButtonsWrapper,
} from "./FlightItem.styled";

type FlightItemProps = TRocket & {
  isFavorite?: boolean;
};

const FlightItem = ({
  name,
  description,
  img,
  isFavorite,
}: FlightItemProps) => {
  return (
    <Item>
      <article>
        <Image src={img} alt={name} width={411} height={296} />
        <Content>
          <Title>{name}</Title>
          <Text>{description}</Text>
          <ButtonsWrapper>
            <ActionButton>buy</ActionButton>
            {isFavorite ? (
              <IconButton icon="delete" />
            ) : (
              <IconButton icon="heart" />
            )}
          </ButtonsWrapper>
        </Content>
      </article>
    </Item>
  );
};

export default FlightItem;
