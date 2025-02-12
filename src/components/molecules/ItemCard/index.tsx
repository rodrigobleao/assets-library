import Typography from '../../atoms/Typography';
import BackgroundContainer from '../BackgroundContainer';
import Icon from '../../atoms/Icon';
import {
  ItemCardBackgroundColorOptions,
  itemCardBackgroundVariant,
} from './styles';
import { Asset, Kpi } from '@/mock/data';

interface ItemCardProps {
  item: Kpi | Asset;
  className: string;
  background?: ItemCardBackgroundColorOptions;
  itemAction: (id: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  itemAction,
  background,
  className,
}) => {
  const { id, title, description, footerText } = item;

  const backgroundColor =
    itemCardBackgroundVariant[background || 'transparent'];

  return (
    <button
      className={`flex h-32 rounded-lg p-4 ${backgroundColor} ${className}`}
      onClick={() => itemAction(id)}
    >
      <BackgroundContainer className="flex aspect-square h-full justify-center items-center">
        <Icon name="pie-chart" className="p-4" color="contrast" size="full" />
      </BackgroundContainer>
      <div className="flex flex-col items-start h-full w-full px-4 gap-2 justify-center">
        <Typography variant="strong" className="leading-none">
          {title}
        </Typography>
        <Typography variant="p" className="leading-5 line-clamp-2">
          {description}
        </Typography>
        <Typography variant="span" className="leading-none">
          {footerText}
        </Typography>
      </div>
    </button>
  );
};

export default ItemCard;
