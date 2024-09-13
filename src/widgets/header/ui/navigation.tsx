import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/shared/ui"
import Link from "next/link"

interface INavtigationItem {
  name: string
  link?: string
  subItems?: INavtigationItem[]
}

export const navigationItem: INavtigationItem[] = [
  {
    name: 'Правила торговли',
    link: '/'
  },
  {
    name: 'Топ трейдеры',
    link: '/'
  },
  {
    name: 'Связаться с нами',
    link: '/'
  },
  {
    name: 'Больше',
    subItems: [
      {
        name: 'Блок',
        link: '/',
      },
      {
        name: 'Affiliate Portal',
        link: '/',
      },
      {
        name: 'Вопрос-ответ',
        link: '/',
      }
    ]
  }
]

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          navigationItem.map(({ name, link, subItems }) => (
            <NavigationMenuItem key={name}>
              {!subItems ? (
                <Link href={link as string} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {name}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger className='hover:bg-transparent'>{name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {subItems.map(({ name: subItemName, link }) => (
                      <Link key={subItemName} href={link as string} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {subItemName}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>

  )
}