# Image

```ts
interface ImageProps {
    src: string;
    height?: number;
    width?: number;
    alt?: string;
    fallback?: string;
    placeholder?: boolean | React.ReactNode;
    preview?: boolean | PreviewType;
}

interface PreviewType {
    visible?: boolean;
    src?: string;
    onVisibleChange?: (visible: boolean, prevVisible: boolean) => void;
}
```
