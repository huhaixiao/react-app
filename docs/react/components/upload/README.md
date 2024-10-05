# Upload

```ts
/**
 * 继承自 File，附带额外属性用于渲染。 
 */
interface UplaodFile extends File {

}

interface UploadProps {
    /**
     * input accept Attribute
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: string;
    disabled?: boolean;
    multiple?: boolean;
    maxCount?: number;
    fileList?: UplaodFile[];
    onChange?:({file, fileList, event}: {file: UplaodFile; fileList: UplaodFile[]}) => void;
    /**
     * 点击移除文件时的回调，返回值为 false 时不移除。
     * Promise 对象 resolve(false) 或 reject 时不移除      
     */
    onRemove?:() => Promise<boolean>;
}
```
