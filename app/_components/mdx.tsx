'use client';

// @ts-nocheck
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

type ComponentProps = {
	className?: string;
	[key: string]: any;
};

function clsx(...args: any) {
	return args.filter(Boolean).join(' ');
}

function normalizeStyle(style: any) {
	if (!style || typeof style !== 'object' || Array.isArray(style)) {
		return style;
	}

	return Object.entries(style).reduce(
		(normalized: Record<string, any>, [key, value]) => {
			const normalizedKey = String(key).replace(
				/-([a-z])/g,
				(_, char) => char.toUpperCase(),
			);
			normalized[normalizedKey] = value;
			return normalized;
		},
		{},
	);
}

const components: Record<string, any> = {
	h1: ({ className, ...props }: ComponentProps) => (
		<h1
			className={clsx(
				'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: ComponentProps) => (
		<h2
			className={clsx(
				'mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0',
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: ComponentProps) => (
		<h3
			className={clsx(
				'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: ComponentProps) => (
		<h4
			className={clsx(
				'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: ComponentProps) => (
		<h5
			className={clsx(
				'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: ComponentProps) => (
		<h6
			className={clsx(
				'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, style, ...props }: ComponentProps) => (
		<a
			className={clsx(
				'font-medium text-zinc-900 underline underline-offset-4',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	p: ({ className, style, ...props }: ComponentProps) => (
		<p
			className={clsx(
				'text-justify leading-7 [&:not(:first-child)]:mt-6',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: ComponentProps) => (
		<ul
			className={clsx('my-6 ml-6 list-disc', className)}
			{...props}
		/>
	),
	ol: ({ className, ...props }: ComponentProps) => (
		<ol
			className={clsx('my-6 ml-6 list-decimal', className)}
			{...props}
		/>
	),
	li: ({ className, ...props }: ComponentProps) => (
		<li className={clsx('mt-2', className)} {...props} />
	),
	blockquote: ({ className, style, ...props }: ComponentProps) => (
		<blockquote
			className={clsx(
				'mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		style,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={clsx(
				'rounded-md border border-zinc-200',
				className,
			)}
			alt={alt}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	video: ({
		className,
		style,
		...props
	}: React.VideoHTMLAttributes<HTMLVideoElement>) => (
		<video
			className={clsx('mx-auto', className)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	div: ({ className, style, ...props }: ComponentProps) => (
		<div
			className={clsx(className)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	span: ({ className, style, ...props }: ComponentProps) => (
		<span
			className={clsx(className)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	hr: ({ style, ...props }: ComponentProps) => (
		<hr
			className="my-4 border-zinc-200 md:my-8"
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	table: ({
		className,
		style,
		...props
	}: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table
				className={clsx('w-full', className)}
				style={normalizeStyle(style)}
				{...props}
			/>
		</div>
	),
	tr: ({
		className,
		style,
		...props
	}: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={clsx(
				'm-0 border-t border-zinc-300 p-0 even:bg-zinc-100',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	th: ({ className, style, ...props }: ComponentProps) => (
		<th
			className={clsx(
				'border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	td: ({ className, style, ...props }: ComponentProps) => (
		<td
			className={clsx(
				'border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	pre: ({ className, style, ...props }: ComponentProps) => (
		<pre
			className={clsx(
				'mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-900 py-4',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),
	code: ({
		className,
		'data-language': dataLanguage,
		style,
		...props
	}: ComponentProps) => {
		const inlineCodeClasses =
			'relative rounded border bg-zinc-300 bg-opacity-25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-600';
		return (
			<code
				className={clsx(
					dataLanguage ? className : inlineCodeClasses,
					className,
				)}
				style={normalizeStyle(style)}
				{...props}
			/>
		);
	},
	u: ({ className, style, ...props }: ComponentProps) => (
		<p
			className={clsx(
				'font-semibold leading-7 underline [&:not(:first-child)]:mt-6',
				className,
			)}
			style={normalizeStyle(style)}
			{...props}
		/>
	),

	Image,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
