
@php use Illuminate\Support\Facades\Auth; @endphp
<x-mail::message>
<h1 style="text-align: right;direction: rtl; display:block">
{{$name}} جون
</h1>
<p1 style="text-align: right;direction: rtl; display:block">
    ایمیل شما با موفقیت ثبت شد!
    از حالا به بعد میتونید گیفهای خود رو به آیدی زیر در تلگرام ارسال نمایید
</p1>

@auth()
@if(!Auth::user()->email_verified_at)
<x-mail::button :url="$url">
ایمیل خود را تایید نمایید
 </x-mail::button>
@endif()
@endauth

<h5 style="text-align: right;direction: rtl; display:block">
پیشاپیش پذیرای محتوای دیجیتال شما هستیم, با تشکر<br>
</h5>

</x-mail::message>

