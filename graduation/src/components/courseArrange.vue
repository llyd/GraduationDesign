<template>
<div class="my-component">
<h2>{{msg}}</h2>
</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			msg: 'hello'
		}
	}
}
</script>

<style scoped>

.tbl {
	width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
}
.tbl tr td {
	padding:8px;
	text-align: center;
}

.tr_c{
	 background-color: #fff;
}
</style>