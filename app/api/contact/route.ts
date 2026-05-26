import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, turnstileToken } = body;

    // Validation des champs
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Le nom est requis (min. 2 caractères).' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return NextResponse.json({ error: 'L\'objet est requis.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Le message est requis (min. 10 caractères).' }, { status: 400 });
    }
    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json({ error: 'Veuillez valider le captcha.' }, { status: 400 });
    }

    // Vérification Turnstile côté serveur
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY manquante dans les variables d\'environnement');
      return NextResponse.json({ error: 'Configuration serveur incomplète.' }, { status: 500 });
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.warn('Turnstile verification failed:', verifyData);
      return NextResponse.json(
        { error: 'Vérification de sécurité échouée. Veuillez réessayer.' },
        { status: 400 }
      );
    }

    // ─── FAKE SUCCESS ───
    // Remplace ce bloc par un vrai envoi d'email (Resend, Nodemailer, SendGrid, etc.)
    console.log('📨 Nouveau message de contact:', {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      turnstileScore: verifyData.score ?? 'N/A',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
