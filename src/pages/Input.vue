<template>
    <div>
        <k-text subheading important>Introduccion</k-text>
        <k-container>
            <div class="w-1/2 mx-auto">
                <k-input></k-input>
                <k-input state='success'></k-input>
                <k-input state='warning'></k-input>
                <k-input state='error'></k-input>
            </div>
        </k-container>
        <k-text important subheading>Variantes</k-text>
        <k-text class='block'>
            Los campos de texto tienen variantes de estados Warning, Danger y Success respectivamente, que pueden ser facilmente modificadas mediante el prop `state`
        </k-text>
        <k-container>
            <div class="w-1/2 mx-auto">
                <k-input></k-input>
                <k-input message='Clave segura' state='success'></k-input>
                <k-input message='Tu clave es insegura' state='warning'></k-input>
                <k-input message='Clave inaceptable' state='error'></k-input>
            </div>
        </k-container>
        <k-text important subheading>Slots</k-text>
        <k-text class='block'>
            Los campos de texto cuentan con dos slots, before y after respectivamente, se recomienda utilizar el prop shorthand
            `icon-before` y `icon-after` en caso de uso con iconos.
        </k-text>
        <k-container>
            <div class="w-1/2 mx-auto">
                <k-input placeholder='Nombre de usuario' state='success'>
                    <k-icon slot='before'>bx-user</k-icon>
                </k-input>
                <k-input placeholder='Clave' state='success'>
                    <k-icon slot='before'>bx-key</k-icon>
                    <k-button slot='after'>Verify</k-button>
                </k-input>
            </div>
        </k-container>
    </div>
</template>