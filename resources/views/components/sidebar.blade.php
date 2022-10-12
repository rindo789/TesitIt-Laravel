<div class="sidebar">
    <a href="/teacher">Testy</a>
    <a href="/groups">Skupiny</a>
    <a href="/answers">Hodnotenia</a>
    <form action="/logout" method="POST">
        @csrf
        <button type="submit">Logout</button>
    </form>
</div>