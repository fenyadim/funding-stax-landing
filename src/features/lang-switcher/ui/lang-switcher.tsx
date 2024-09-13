import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';
import Image from 'next/image';
import { langsData } from '../model/langs';

export const LangSwitcher = () => {
  return (
    <Select>
      <SelectTrigger className='max-w-[120px] flex-1 capitalize'>
        <SelectValue placeholder='EN' />
      </SelectTrigger>
      <SelectContent
        className='dark:shadow-none dark:border dark:border-foreground/10'
      >
        {langsData.map(({ key, iconSrc, value }) => (
          <SelectItem className='capitalize' key={key} value={key}>
            <div className='flex gap-3 items-center justify-start'>
              <Image src={iconSrc} alt={value} width={28} height={28} />
              <span>{value}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
