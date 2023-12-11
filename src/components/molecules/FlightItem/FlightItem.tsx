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
import { useRecoilState } from "recoil";
import { favoriteListState } from "../../../state/atoms";
import { showToast } from "../../../utils/showToast";

type FlightItemProps = TRocket & {
  isFavorite?: boolean;
  addToFavorites?: ((data: TRocket) => void) | undefined;
};

const FlightItem = ({
  id,
  name,
  description,
  img,
  isFavorite,
  addToFavorites,
}: FlightItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFavoriteList] = useRecoilState(favoriteListState);

  const handleAddToFav = (data: TRocket) => {
    addToFavorites && addToFavorites(data);
  };

  const handleDeleteFav = (id: string) => {
    setFavoriteList((prevItems) => prevItems.filter((item) => item.id !== id));
    showToast("Successfully deleted!");
  };

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
              <IconButton icon="delete" onClick={() => handleDeleteFav(id)} />
            ) : (
              <IconButton
                icon="heart"
                onClick={() => handleAddToFav({ id, name, description, img })}
              />
            )}
          </ButtonsWrapper>
        </Content>
      </article>
    </Item>
  );
};

export default FlightItem;
