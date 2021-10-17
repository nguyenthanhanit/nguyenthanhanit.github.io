<div class="pt-9">
    <div v-for="post in $site.pages.filter(p => p.path.includes('/post'))">
        <router-link v-if="post.relativePath !== 'post/README.md'" :to="post.path" class="flex flex gap-4 font-bold">
            <p>{{ post.frontmatter.created }}</p>
            <p class="post__title">{{ post.title }}</p>
        </router-link>
    </div>
</div>