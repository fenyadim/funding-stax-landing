import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  active:scale-click',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:border-border hover:text-border',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/90',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-foreground hover:text-primary underline-offset-4 !p-0 active:scale-100',
				icon: 'bg-icon text-icon-foreground border border-foreground/10 rounded-xl hover:bg-icon-hover group',
			},
			size: {
				default: 'h-10 px-8 py-3',
				sm: 'h-9 px-3',
				lg: 'px-8 py-5',
				icon: 'p-2',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';

export { Button, buttonVariants };
