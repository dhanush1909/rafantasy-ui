<template>
    <AuthCommon>
        <template slot="auth">
            <Login />
        </template>
    </AuthCommon>
</template>
<script>
import AuthCommon from '@/components/authCommon/AuthCommon';
import Login from '@/components/Login';
export default {
    components: {
        AuthCommon,
        Login
    }
}
</script>