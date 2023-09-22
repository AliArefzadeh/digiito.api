<x-mail::message>
    # Order Shipped

    Your order has been shipped!

    <x-mail::button :url="$url">
        View Order
    </x-mail::button>
    Thanks,<br>
    {{ config('app.name') }}
</x-mail::message>

{{--<h1>
    Dear {{$user->name}} from {{$user->country}},{{$user->city}} your email has been verified!
</h1>--}}
