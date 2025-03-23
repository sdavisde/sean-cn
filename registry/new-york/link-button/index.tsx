import { Button } from '@/components/ui/button'
import { ConditionalLink } from '@/registry/new-york/conditional-link'
import { LinkProps } from 'next/link'

type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  href: string | null
  linkProps?: Omit<LinkProps, 'href'>
}
export function LinkButton({ href, linkProps, ...props }: LinkButtonProps) {
  return (
    <ConditionalLink
      href={href}
      {...linkProps}
    >
      <Button {...props} />
    </ConditionalLink>
  )
}
